/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Typography, Paper, IconButton, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface UploadFotoPersilBoxProps {
  spopData: any;
  setSpopData: React.Dispatch<React.SetStateAction<string[]>>;
}

const dropzoneStyle = (disabled: boolean) => ({
  border: "2px dashed green",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center" as const,
  cursor: disabled ? "not-allowed" : "pointer",
  backgroundColor: disabled ? "#e0e0e0" : "#f9f9f9",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  pointerEvents: disabled ? "none" : "auto",
});

const UploadFotoPersilBox: React.FC<UploadFotoPersilBoxProps> = ({ spopData, setSpopData }) => {
  const paramsNOP = useParams<{ nop: string }>();
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    maxFiles: 2 - uploadedUrls.length,
    onDrop: async (acceptedFiles) => {
      if (!acceptedFiles.length) return;

      setIsUploading(true);
      const newUrls: string[] = [];

      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append("fotopersil", file);

        try {
          const response = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/fotoobjekpajak/${paramsNOP.nop}?count=${uploadedUrls.length}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
          const urls = response.data.imageUrls;
          if (Array.isArray(urls)) {
            const freshUrls = urls.filter((url) => !uploadedUrls.includes(url));
            newUrls.push(...freshUrls);
          }
        } catch (error) {
          console.error(error);
          toast.error("Upload gagal");
        }
      }

      setUploadedUrls((prev) => [...prev, ...newUrls]);

      setSpopData((prev: any) => {
        const existing = prev.foto_op || [];
        const filteredNewUrls = newUrls.filter((url) => !existing.includes(url));
        return {
          ...prev,
          foto_op: [...existing, ...filteredNewUrls],
        };
      });
      setIsUploading(false);

      if (newUrls.length) toast.success("Foto berhasil diunggah");
    },
    disabled: uploadedUrls.length >= 2 || isUploading,
  });

  const handleDeleteFoto = async (imageUrl: string) => {
    try {
      const path = new URL(imageUrl).pathname;
      const fileName = path.split("/").pop();
      const publicId = `${fileName?.split(".")[0]}.${fileName?.split(".")[1]}`;

      if (!publicId) throw new Error("Gagal extract publicId dari URL");

      setIsUploading(true);
      const response = await axios.delete<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/fotoobjekpajak/${publicId}`);

      if (response.data.code === 200) {
        toast.success("Foto berhasil dihapus!");

        // Update uploadedUrls state
        setUploadedUrls((prevUrls) => prevUrls.filter((url) => url !== imageUrl));

        // Update spopData.foto_op state
        setSpopData((prev: any) => ({
          ...prev,
          foto_op: (prev.foto_op || []).filter((url: string) => url !== imageUrl),
        }));
      }

      // update state setelah berhasil hapus
    } catch (error) {
      console.error("Error deleting photo:", error);
      toast.error("Gagal menghapus foto");
    }
    setIsUploading(false);
  };

  useEffect(() => {
    if (spopData?.foto_op && Array.isArray(spopData.foto_op)) {
      setUploadedUrls(spopData.foto_op);
    }
  }, [spopData?.foto_op]);
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: "#fff", mt: 4 }}>
      <Toaster position="top-center" />

      {uploadedUrls.length === 0 && (
        <Box {...getRootProps()} sx={dropzoneStyle(isUploading)}>
          <input {...getInputProps()} />
          {isUploading ? (
            <CircularProgress />
          ) : (
            <>
              <ImageIcon sx={{ fontSize: 50, color: "green" }} />
              <Typography variant="body2">Drag & drop maksimal 2 gambar, atau klik untuk memilih</Typography>
            </>
          )}
        </Box>
      )}

      {uploadedUrls.length > 0 && (
        <Box mt={2}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {uploadedUrls.map((url, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(50% - 16px)" },
                  position: "relative",
                }}
              >
                <Image src={url} alt={`Foto Persil ${index + 1}`} width={400} height={300} quality={70} style={{ objectFit: "cover", borderRadius: 8, width: "100%", height: "auto" }} />
                <IconButton
                  onClick={() => handleDeleteFoto(url)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "#fff",
                    "&:hover": { backgroundColor: "#f2f2f2" },
                  }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            ))}
          </Box>

          {uploadedUrls.length < 2 && (
            <Box mt={2} {...getRootProps()} sx={dropzoneStyle(isUploading)}>
              <input {...getInputProps()} />
              {isUploading ? (
                <CircularProgress />
              ) : (
                <>
                  <ImageIcon sx={{ fontSize: 50, color: "green" }} />
                  <Typography variant="body2">Tambah 1 lagi (maks 2 foto)</Typography>
                </>
              )}
            </Box>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default UploadFotoPersilBox;
