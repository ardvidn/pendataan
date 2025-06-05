/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import GeoInputWithMap from "../../../../components/LocationForm";
import { LSPOPForm } from "../../../../components/LSPOP/LSPOPForm";
import { Box, Step, StepLabel, Stepper, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { preparePayload } from "../../../../utils/FormPayload";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { logged, ResponseData } from "../../../../utils/interface";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SPOPForm } from "../../../../components/SPOP/SPOPForm";

const steps = ["SPOP", "LSPOP", "Lokasi"];

export default function UpdateNOPForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [spopData, setSpopData] = useState<Record<any, any>>({});
  const [wajibPajak, setWajibPajak] = useState<Record<string, any>>({});
  const [lspopData, setLspopData] = useState<Record<any, any>[]>([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [isSpopValid, setIsSpopValid] = useState(false);
  const [isSpopValidB, setIsSpopValidB] = useState(false);
  const [isLspopValid, setIsLspopValid] = useState(false);
  const [isGeoValid, setIsGeoValid] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramsNOP = useParams<{ nop: string }>();
  const isTanahKosong = spopData?.jns_bumi === "3";
  const isFromEdit = searchParams.get("source") === "edit";

  useEffect(() => {
    const fetchDatOpPajakUpdateNOP = async () => {
      try {
        // Selalu ambil data dari pendataan jika dari edit button
        if (isFromEdit) {
          const response = await axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdatebynop?nop=${paramsNOP.nop}`);
          const data = response.data.data;
          setSpopData(data.dat_op_pajak);
          setLspopData(data.dat_op_bangunan);
          setWajibPajak(data.wajib_pajak);
          setLatitude(data.dat_op_pajak.latitude);
          setLongitude(data.dat_op_pajak.longitude);
          return;
        }
        // Hanya ambil data PBB jika bukan dari edit button
        else {
          const response = await axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/datobjekpajak?nop=${paramsNOP.nop}`);
          const data = response.data.data;

          setSpopData(data.dat_op_pajak);
          setLspopData(data.dat_op_bangunan);
          setWajibPajak(data.wajib_pajak);
          setLatitude(data.dat_op_pajak.latitude);
          setLongitude(data.dat_op_pajak.longitude);
          console.log(response.data.data);
        }

        // Fallback jika foto_op kosong
        if (!spopData.foto_op || spopData.dat_op_pajak.foto_op.length === 0) {
          const fotoResponse = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getfotopersil/${paramsNOP.nop}`);
          const imageUrls = fotoResponse.data.imageUrls;

          if (fotoResponse.data.isEmpty === true) {
            return;
          }
          // Inject ke spopData
          setSpopData((prev) => ({
            ...prev,
            foto_op: imageUrls,
          }));
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          const { message } = error.response.data;
          toast.error(message || "Data tidak ditemukan!");
        } else {
          toast.error("Terjadi kesalahan saat mengecek NOP!");
        }
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(false);
    fetchDatOpPajakUpdateNOP();
  }, [paramsNOP.nop, isFromEdit]);

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setUsername(res.data.data.username);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  const isCurrentStepValid = () => {
    if (activeStep === 0) return isSpopValid && isSpopValidB;
    if (activeStep === 1 && !isTanahKosong) return isLspopValid;
    if (activeStep === 2 || (activeStep === 1 && isTanahKosong)) return isGeoValid;
    return true;
  };

  const handleNext = async () => {
    if (!isCurrentStepValid()) {
      toast.error("Mohon lengkapi data pada step ini sebelum melanjutkan.");
      return;
    }

    const isLastStep = isTanahKosong ? activeStep === steps.length - 1 : activeStep === steps.length - 1;

    if (isLastStep) {
      const updatedSpopData = {
        ...spopData,
        user_pelayanan: username, //
        kd_jns_pelayanan: "12",
        kd_pelayanan: "2",
        log_by: username,
      };
      const payload = preparePayload(updatedSpopData, lspopData, wajibPajak, latitude, longitude, paramsNOP.nop);

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputopupdate?nop=${paramsNOP.nop}`, payload);
        if (response.status === 200) {
          toast.success(`Berhasil mengunggah op update`);

          router.push(`/pendataan/op_update`);
        } else {
          toast.error(`Terjadi kesalahan saat mengunggah op update`);
        }
      } catch (error) {
        console.log(error);
      }
      console.log("Submit data:", payload);
      // Kirim ke backend jika diperlukan
    } else {
      // Skip LSPOP jika tanah kosong
      if (isTanahKosong && activeStep === 0) {
        setActiveStep((prev) => prev + 2); // lompat dari SPOP ke Location
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (isTanahKosong && activeStep === 2) {
      setActiveStep((prev) => prev - 2); // kembali langsung ke SPOP
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleGoToBack = () => {
    router.push("/pendataan/op_update");
  };

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <>
      <Toaster position="top-center" />
      <Box width="fullwidth" height="100tvh" sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
        <Box sx={{ width: "100%", p: 2 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => {
              if (isTanahKosong && label === "LSPOP") return null;
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFC107",
                color: "#000",
                "&:hover": {
                  bgcolor: "#E0A800",
                },
              }}
              startIcon={<ArrowBackIcon />}
              onClick={handleGoToBack}
            >
              Kembali
            </Button>
          </Box>

          {activeStep === 0 && (
            <SPOPForm nop={paramsNOP.nop} spopData={spopData} setSpopData={setSpopData} isLoading={isLoading} wajibPajak={wajibPajak} setWajibPajak={setWajibPajak} onValidityChange={setIsSpopValid} onValidityChangeB={setIsSpopValidB} />
          )}

          {activeStep === 1 && !isTanahKosong && <LSPOPForm nop={paramsNOP.nop} lspopData={lspopData} setLspopData={setLspopData} onValidityChange={setIsLspopValid} />}

          {(activeStep === 2 || (activeStep === 1 && isTanahKosong)) && (
            <GeoInputWithMap latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude} spopData={spopData} setSpopData={setSpopData} onValidityChange={setIsGeoValid} />
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={activeStep === steps.length - 1 || (isTanahKosong && activeStep === steps.length - 2) ? { mr: 1, backgroundColor: "#FFC107", color: "#023047" } : { mr: 1, backgroundColor: "#FFC107", color: "#023047" }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ backgroundColor: "#219EBC", color: "#FFF" }} disabled={!isCurrentStepValid()}>
              {isTanahKosong ? (activeStep === steps.length - 1 ? "Finish" : "Next") : activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>

          {((!isTanahKosong && activeStep === steps.length) || (isTanahKosong && activeStep === steps.length - 1)) && <Typography sx={{ mt: 2, mb: 1 }}>Data berhasil dikirim!</Typography>}
        </Box>
      </Box>
    </>
  );
}
