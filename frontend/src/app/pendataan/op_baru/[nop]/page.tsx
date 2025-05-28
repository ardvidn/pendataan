/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { logged, ResponseData } from "@/utils/interface";
import axios from "axios";
import SPOPFormBaru from "@/components/FormOPBaru/SPOPBaru/SPOPFormBaru";
import { LSPOPForm } from "@/components/LSPOP/LSPOPForm";
import GeoInputWithMap from "@/components/LocationForm";
import { preparePayload } from "@/utils/FormPayload";

const steps = ["SPOP", "LSPOP", "Lokasi"];

const FormOpBaru = () => {
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
  const [kdKecBaru, setKdKecBaru] = useState("");
  const [kdKelBaru, setKdKelBaru] = useState("");
  const [kdBlokBaru, setKdBlokBaru] = useState("");
  const [nopBaru, setNopBaru] = useState("");
  const [selectedKecamatanBaru, setSelectedKecamatanBaru] = useState<any | null>(null);
  const [selectedKelurahanBaru, setSelectedKelurahanBaru] = useState<any | null>(null);
  const [selectedBlokBaru, setSelectedBlokBaru] = useState<any | null>(null);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const isTanahKosong = spopData?.jns_bumi === "3";
  const isFromEdit = searchParams.get("source") === "edit";
  const nop = params?.nop as string;

  useEffect(() => {
    const fetchDataEdit = async () => {
      try {
        if (!nop) return;

        const response = await axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakbarubynop?nop=${nop}`);
        const data = response.data.data;

        setSpopData(data.dat_op_pajak);
        setLspopData(data.dat_op_bangunan);
        setWajibPajak(data.wajib_pajak);
        setLatitude(data.dat_op_pajak.latitude);
        setLongitude(data.dat_op_pajak.longitude);
      } catch (err) {
        console.error("Error fetching data for edit:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (isFromEdit) {
      fetchDataEdit();
    }
  }, [isFromEdit, nop, params.nop]);

  // 2. useEffect untuk TAMBAH DATA BARU
  useEffect(() => {
    const fetchDataBaru = async () => {
      try {
        const kd_kecamatan = kdKecBaru || "";
        const kd_kelurahan = kdKelBaru || "";
        const kd_blok = kdBlokBaru || "";

        if (!kd_kecamatan || !kd_kelurahan || !kd_blok) return;

        const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/checkdatoppajakbaru?kd_kec=${kd_kecamatan}&kd_kel=${kd_kelurahan}&kd_blok=${kd_blok}&pel=11`);

        if (response.data.code === 290 || response.data.code === 280) {
          let noUrutBaru: string;

          if (response.data.code === 290) {
            noUrutBaru = String(parseInt(response.data.data) + 1).padStart(4, "0");
          } else {
            const urutResp = await axios.get<any>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/urutopbaru?kd_kecamatan=${kd_kecamatan}&kd_kelurahan=${kd_kelurahan}&kd_blok=${kd_blok}`);
            noUrutBaru = String(parseInt(urutResp.data.data) + 1).padStart(4, "0");
          }

          const NOPBaru = `6213${kd_kecamatan}${kd_kelurahan}${kd_blok}${noUrutBaru}0`;
          setNopBaru(NOPBaru);

          if (!spopData?.nop) {
            setSpopData((prev) => ({ ...prev, nop: NOPBaru }));
          }
        }
      } catch (err) {
        console.error("Error generating new NOP:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isFromEdit) {
      fetchDataBaru();
    }
  }, [isFromEdit, kdBlokBaru, kdKecBaru, kdKelBaru, nop, spopData?.nop]);

  const isCurrentStepValid = () => {
    if (activeStep === 0) return isSpopValid && isSpopValidB;
    if (activeStep === 1) return isTanahKosong || isLspopValid;
    if (activeStep === 2) return isGeoValid;
    return true;
  };

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setUsername(res.data.data.username);
      })
      .catch(() => router.push("/login"));
  }, [router]);

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
        kd_jns_pelayanan: "11",
        kd_pelayanan: "1",
        log_by: username,
        jns_transaksi_op: "1",
      };
      const payload = preparePayload(updatedSpopData, lspopData, wajibPajak, latitude, longitude, nopBaru);

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputopbaru?nop=${nop}`, payload);
        if (response.status === 200) {
          toast.success(`Berhasil mengunggah op baru`);

          router.push(`/pendataan/op_baru`);
        } else {
          toast.error(`Terjadi kesalahan saat mengunggah op baru`);
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
    router.push("/pendataan/op_baru");
  };

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
            <Box sx={{ color: "#000" }}>
              <SPOPFormBaru
                isFromEdit={isFromEdit}
                nop={nop}
                spopData={spopData}
                setSpopData={setSpopData}
                nopBaru={nopBaru}
                kdKecBaru={kdKecBaru}
                kdKellBaru={kdKelBaru}
                kdBlokBaru={kdBlokBaru}
                setKdKecBaru={setKdKecBaru}
                setKdKelBaru={setKdKelBaru}
                setKdBlokBaru={setKdBlokBaru}
                onValidityChange={setIsSpopValid}
                onValidityChangeB={setIsSpopValidB}
                wajibPajak={wajibPajak}
                setWajibPajak={setWajibPajak}
                isLoading={isLoading}
                selectedKecamatanBaru={selectedKecamatanBaru}
                setSelectedKecamatanBaru={setSelectedKecamatanBaru}
                selectedKelurahanBaru={selectedKelurahanBaru}
                setSelectedKelurahanBaru={setSelectedKelurahanBaru}
                selectedBlokBaru={selectedBlokBaru}
                setSelectedBlokBaru={setSelectedBlokBaru}
              />
            </Box>
          )}

          {activeStep === 1 && !isTanahKosong && <LSPOPForm nop={nopBaru} lspopData={lspopData} setLspopData={setLspopData} onValidityChange={setIsLspopValid} />}

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
            <Button onClick={handleNext} sx={{ backgroundColor: "#219EBC", color: "#FFF" }} disabled={!isCurrentStepValid() || isLoading}>
              {isTanahKosong ? (activeStep === steps.length - 1 ? "Finish" : "Next") : activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>

          {(!isTanahKosong || (isTanahKosong && activeStep === steps.length - 1)) && <Typography sx={{ mt: 2, mb: 1 }}>Data berhasil dikirim!</Typography>}
        </Box>
      </Box>
    </>
  );
};

export default FormOpBaru;
