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
  const [files, setFiles] = useState<File[]>([]);
  const [deletedLinks, setDeletedLinks] = useState<string[]>([]);
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
          const fotoResponse = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getfotopersil/${paramsNOP.nop}`);
          const imageUrls = fotoResponse.data.imageUrls;

          const data = response.data.data;

          setSpopData(data.dat_op_pajak);
          setLspopData(data.dat_op_bangunan);
          setWajibPajak(data.wajib_pajak);
          setLatitude(data.dat_op_pajak.latitude);
          setLongitude(data.dat_op_pajak.longitude);

          // Jika foto_op masih null/undefined, set menjadi []
          if (!data.dat_op_pajak.foto_op) {
            setSpopData((prev: any) => ({
              ...prev,
              foto_op: [],
            }));
          }

          // Setelah itu, baru lakukan pengecekan panjang dan update jika perlu
          if ((!data.dat_op_pajak.foto_op || data.dat_op_pajak.foto_op.length === 0) && imageUrls.length !== 0) {
            setSpopData((prev: any) => ({
              ...prev,
              foto_op: imageUrls,
            }));
          }

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
        }

        // Fallback jika foto_op kosong
        if (!spopData.foto_op || spopData.dat_op_pajak.foto_op.length === 0) {
          const fotoResponse = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getfotopersil/${paramsNOP.nop}`);
          const imageUrls = fotoResponse.data.imageUrls;

          if (fotoResponse.data.isEmpty === true) {
            return;
          }
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

  // Fungsi bantu: menentukan index foto berikutnya yang belum terpakai
  const getNextFotoIndex = (existingUrls: string[], nop: string) => {
    const usedIndexes = existingUrls
      .map((url) => {
        const match = url.match(new RegExp(`${nop}_(\\d+)\\.`));
        return match ? parseInt(match[1]) : null;
      })
      .filter((x) => x !== null);

    for (let i = 1; i <= 2; i++) {
      if (!usedIndexes.includes(i)) return i;
    }
    return null; // sudah penuh
  };

  // const handleNext = async () => {
  //   if (!isCurrentStepValid()) {
  //     toast.error("Mohon lengkapi data pada step ini sebelum melanjutkan.");
  //     return;
  //   }

  //   const isLastStep = isTanahKosong ? activeStep === steps.length - 1 : activeStep === steps.length - 1;

  //   if (isLastStep) {
  //     const updatedSpopData = {
  //       ...spopData,
  //       user_pelayanan: username,
  //       kd_jns_pelayanan: "12",
  //       kd_pelayanan: "2",
  //       log_by: username,
  //     };

  //     try {
  //       const uploadedUrls: string[] = [...(spopData.foto_op || [])];

  //       // === 1. Hapus foto lama yang ditandai (dan siapkan untuk diganti)
  //       const replacementMap: Record<string, File> = {};

  //       for (const url of deletedLinks) {
  //         const match = url.match(/\/fotopersil\/(.+)\.(jpg|jpeg|png|webp|bmp|gif)$/);
  //         const publicId = match ? match[1] : null;
  //         if (!publicId) continue;

  //         // Cari file pengganti (jika ada)
  //         const replacementFile = files.shift(); // ambil satu file dari antrian files
  //         if (replacementFile) {
  //           replacementMap[publicId] = replacementFile;

  //           // Hapus dari AWS (jika perlu)
  //           await axios.delete(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/fotoobjekpajak/${publicId}`);
  //         }

  //         // Hapus link lama dari array
  //         const oldIndex = uploadedUrls.findIndex((u) => u === url);
  //         if (oldIndex !== -1) {
  //           uploadedUrls.splice(oldIndex, 1); // hapus dari array link
  //         }
  //       }

  //       // === 2. Upload file pengganti (dengan nama yang sama)
  //       for (const [publicId, file] of Object.entries(replacementMap)) {
  //         const formData = new FormData();
  //         formData.append("fotopersil", file);

  //         const uploadRes = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${paramsNOP.nop}?forceName=${publicId}`, formData, {
  //           headers: { "Content-Type": "multipart/form-data" },
  //         });

  //         const [newUrl] = uploadRes.data.imageUrls || [];

  //         if (newUrl) {
  //           uploadedUrls.push(newUrl); // Tambahkan kembali ke daftar
  //         }
  //       }

  //       // === 3. Upload file baru lainnya (jika masih ada slot)
  //       for (const file of files) {
  //         const nextIndex = getNextFotoIndex(uploadedUrls, paramsNOP.nop);
  //         if (!nextIndex) {
  //           toast.error("Sudah mencapai batas maksimum 2 foto");
  //           break;
  //         }

  //         const formData = new FormData();
  //         formData.append("fotopersil", file);

  //         const uploadResponse = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${paramsNOP.nop}?count=${nextIndex - 1}`, formData, {
  //           headers: { "Content-Type": "multipart/form-data" },
  //         });

  //         const newUrls = uploadResponse.data.imageUrls || [];
  //         uploadedUrls.push(...newUrls.filter((url: any) => !uploadedUrls.includes(url)));
  //       }

  //       // === 4. Submit data akhir
  //       const finalSpopData = {
  //         ...updatedSpopData,
  //         foto_op: uploadedUrls,
  //       };

  //       const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputopupdate?nop=${paramsNOP.nop}`, preparePayload(finalSpopData, lspopData, wajibPajak, latitude, longitude, paramsNOP.nop));

  //       if (response.status === 200) {
  //         toast.success("Berhasil mengunggah op update");
  //         router.push(`/pendataan/op_update`);
  //       } else {
  //         toast.error("Terjadi kesalahan saat mengunggah op update");
  //       }
  //     } catch (error) {
  //       console.error("Submit error:", error);
  //       toast.error("Terjadi kesalahan saat submit data");
  //     }
  //   } else {
  //     if (isTanahKosong && activeStep === 0) {
  //       setActiveStep((prev) => prev + 2);
  //     } else {
  //       setActiveStep((prev) => prev + 1);
  //     }
  //   }
  // };

  const handleNext = async () => {
    if (!isCurrentStepValid()) {
      toast.error("Mohon lengkapi data pada step ini sebelum melanjutkan.");
      return;
    }

    const isLastStep = isTanahKosong ? activeStep === steps.length - 1 : activeStep === steps.length - 1;

    if (isLastStep) {
      const updatedSpopData = {
        ...spopData,
        user_pelayanan: username,
        kd_jns_pelayanan: "12",
        kd_pelayanan: "2",
        log_by: username,
      };

      try {
        const uploadedUrls: string[] = [...(spopData.foto_op || [])];
        const replacementMap: Record<string, File> = {};

        // === 1. Hapus foto dari AWS dan `foto_op` (dengan atau tanpa pengganti)
        for (const url of deletedLinks) {
          const match = url.match(/\/fotopersil\/(.+)\.(jpg|jpeg|png|webp|bmp|gif)$/);
          const publicId = match ? match[1] : null;
          if (!publicId) continue;

          // Hapus dari AWS
          await axios.delete(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/fotoobjekpajak/${publicId}`);

          // Hapus dari foto_op
          const index = uploadedUrls.indexOf(url);
          if (index !== -1) uploadedUrls.splice(index, 1);

          // Siapkan pengganti jika ada
          const replacementFile = files.shift();
          if (replacementFile) {
            replacementMap[publicId] = replacementFile;
          }
        }

        // === 2. Upload foto pengganti (jika ada) dengan nama yang sama
        for (const [publicId, file] of Object.entries(replacementMap)) {
          const formData = new FormData();
          formData.append("fotopersil", file);

          const res = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${paramsNOP.nop}?forceName=${publicId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

          const [newUrl] = res.data.imageUrls || [];
          if (newUrl) {
            uploadedUrls.push(newUrl);
          }
        }

        // === 3. Upload file baru (jika masih ada slot)
        for (const file of files) {
          const nextIndex = getNextFotoIndex(uploadedUrls, paramsNOP.nop);
          if (!nextIndex) {
            toast.error("Sudah mencapai batas maksimum 2 foto");
            break;
          }

          const formData = new FormData();
          formData.append("fotopersil", file);

          const res = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${paramsNOP.nop}?count=${nextIndex - 1}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

          const newUrls = res.data.imageUrls || [];
          uploadedUrls.push(...newUrls.filter((u: any) => !uploadedUrls.includes(u)));
        }

        // === 4. Submit spopData
        const finalSpopData = {
          ...updatedSpopData,
          foto_op: uploadedUrls,
        };

        const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputopupdate?nop=${paramsNOP.nop}`, preparePayload(finalSpopData, lspopData, wajibPajak, latitude, longitude, paramsNOP.nop));

        if (response.status === 200) {
          toast.success("Berhasil mengunggah op update");
          router.push(`/pendataan/op_update`);
        } else {
          toast.error("Terjadi kesalahan saat mengunggah op update");
        }
      } catch (error: any) {
        console.error("Submit error:", error);
        toast.error(`Terjadi kesalahan saat submit data: ${error.response.data.message}`);
      }
    } else {
      if (isTanahKosong && activeStep === 0) {
        setActiveStep((prev) => prev + 2);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (isTanahKosong && activeStep === 2) {
      setActiveStep((prev) => prev - 2);
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleGoToBack = () => {
    router.push("/pendataan/op_update");
  };

  if (isLoading) return <Typography>Loading...</Typography>;

  console.log(files);

  return (
    <>
      <Toaster position="top-center" />
      <Box mx={{ xs: -2, md: 0 }} height="100%" sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
        <Box sx={{ p: 2 }}>
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
            <SPOPForm
              nop={paramsNOP.nop}
              spopData={spopData}
              setSpopData={setSpopData}
              isLoading={isLoading}
              wajibPajak={wajibPajak}
              setWajibPajak={setWajibPajak}
              onValidityChange={setIsSpopValid}
              onValidityChangeB={setIsSpopValidB}
              files={files}
              setFiles={setFiles}
              deletedLinks={deletedLinks}
              setDeletedLinks={setDeletedLinks}
            />
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
