import { Box, Typography, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";
import toast from "react-hot-toast";

const dropzoneStyle = {
  border: "2px dashed green",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center" as const,
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
};

const UploadFotoPersilBox = () => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error("Pilih gambar terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("fotopersil", file));

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_GIS_API_URL}/api/upload/fotopersil`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Berhasil mengunggah foto");
      setFiles([]);
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error("Terjadi kesalahan saat mengunggah.");
    }
  };

  return (
    <Paper
      elevation={3}
      fullwidth
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        margin: "auto",
        mt: 4,
      }}
    >
      <Box {...getRootProps()} sx={dropzoneStyle}>
        <input {...getInputProps()} />
        <ImageIcon sx={{ fontSize: 50, color: "green" }} />
        <Typography variant="body2">Drag & drop gambar di sini, atau klik untuk memilih file</Typography>
      </Box>

      {files.length > 0 && (
        <Box sx={{ mt: 2, maxHeight: 150, overflowY: "auto" }}>
          {files.map((file, index) => (
            <Typography key={index} variant="body2">
              {file.name}
            </Typography>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default UploadFotoPersilBox;
