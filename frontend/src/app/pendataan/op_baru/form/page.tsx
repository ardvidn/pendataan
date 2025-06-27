/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter, useSearchParams } from "next/navigation";
import { logged } from "@/utils/interface";
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
  const [files, setFiles] = useState<File[]>([]);
  const [deletedLinks, setDeletedLinks] = useState<string[]>([]);
  const [kdKecBaru, setKdKecBaru] = useState("");
  const [kdKelBaru, setKdKelBaru] = useState("");
  const [kdBlokBaru, setKdBlokBaru] = useState("");
  const [nopBaru, setNopBaru] = useState("");
  const [selectedKecamatanBaru, setSelectedKecamatanBaru] = useState<any | null>(null);
  const [selectedKelurahanBaru, setSelectedKelurahanBaru] = useState<any | null>(null);
  const [selectedBlokBaru, setSelectedBlokBaru] = useState<any | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const isTanahKosong = spopData?.jns_bumi === "3";
  const isFromEdit = searchParams.get("source") === "edit";

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
  }, [isFromEdit, kdBlokBaru, kdKecBaru, kdKelBaru, spopData?.nop]);

  const isCurrentStepValid = () => {
    if (activeStep === 0) return isSpopValid && isSpopValidB;
    if (activeStep === 1 && !isTanahKosong) return isLspopValid;
    if (activeStep === 2 || (activeStep === 1 && isTanahKosong)) return isGeoValid;
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
        kd_jns_pelayanan: "11",
        kd_pelayanan: "1",
        log_by: username,
        jns_transaksi_op: "1",
      };

      try {
        const uploadedUrls: string[] = [...(spopData.foto_op || [])];
        const replacementMap: Record<string, File> = {};

        // === 1. Hapus foto lama yang ditandai (dan siapkan untuk diganti)
        for (const url of deletedLinks) {
          const match = url.match(/\/fotopersil\/(.+)\.(jpg|jpeg|png|webp|bmp|gif)$/);
          const publicId = match ? match[1] : null;
          if (!publicId) continue;

          // Hapus dari AWS
          await axios.delete(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/fotoobjekpajak/${publicId}`);

          // Hapus dari foto_op
          const index = uploadedUrls.indexOf(url);
          if (index !== -1) uploadedUrls.splice(index, 1);

          // Cari file pengganti (jika ada)
          const replacementFile = files.shift(); // ambil satu file dari antrian files
          if (replacementFile) {
            replacementMap[publicId] = replacementFile;
          }
        }

        // === 2. Upload file pengganti (dengan nama yang sama)
        for (const [publicId, file] of Object.entries(replacementMap)) {
          const formData = new FormData();
          formData.append("fotopersil", file);

          const uploadRes = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${nopBaru}?forceName=${publicId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          const [newUrl] = uploadRes.data.imageUrls || [];
          if (newUrl) {
            uploadedUrls.push(newUrl); // Tambahkan kembali ke daftar
          }
        }

        // === 3. Upload file baru lainnya (jika masih ada slot)
        for (const file of files) {
          const nextIndex = getNextFotoIndex(uploadedUrls, nopBaru);
          if (!nextIndex) {
            toast.error("Sudah mencapai batas maksimum 2 foto");
            break;
          }

          const formData = new FormData();
          formData.append("fotopersil", file);

          const uploadResponse = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${nopBaru}?count=${nextIndex - 1}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          const newUrls = uploadResponse.data.imageUrls || [];
          uploadedUrls.push(...newUrls.filter((url: any) => !uploadedUrls.includes(url)));
        }

        // === 4. Submit data akhir
        const finalSpopData = {
          ...updatedSpopData,
          foto_op: uploadedUrls,
        };

        const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputopbaru?nop=${nopBaru}`, preparePayload(finalSpopData, lspopData, wajibPajak, latitude, longitude, nopBaru));

        if (response.status === 200) {
          toast.success("Berhasil mengunggah op baru");
          router.push(`/pendataan/op_baru`);
        } else {
          toast.error("Terjadi kesalahan saat mengunggah op baru");
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
                files={files}
                setFiles={setFiles}
                deletedLinks={deletedLinks}
                setDeletedLinks={setDeletedLinks}
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
            <Button onClick={handleNext} sx={{ backgroundColor: "#219EBC", color: "#FFF" }} disabled={!isCurrentStepValid()}>
              {isTanahKosong ? (activeStep === steps.length - 1 ? "Finish" : "Next") : activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>

          {((!isTanahKosong && activeStep === steps.length) || (isTanahKosong && activeStep === steps.length - 1)) && <Typography sx={{ mt: 2, mb: 1 }}>Data berhasil dikirim!</Typography>}
        </Box>
      </Box>
    </>
  );
};

export default FormOpBaru;
