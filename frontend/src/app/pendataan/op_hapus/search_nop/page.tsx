/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { formatNop } from "../../../../utils/formatNOP";
import { validateNOP } from "../../../../utils/validateNOP";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ResponseData } from "@/utils/interface";

const SearchNOP = () => {
  const [nop, setNop] = useState("");
  const [rawNop, setRawNop] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setRawNop(value);

    const formattedNop = formatNop(value);
    setNop(formattedNop);

    if (!value) {
      setError("");
    } else if (formattedNop.length === 24 && validateNOP(formattedNop)) {
      setError("");
    } else {
      setError("Format NOP tidak valid (XX.XX.XXX.XXX.XXX.XXXX.X)");
    }
  };

  const handleSubmit = async () => {
    if (!validateNOP(nop)) {
      setError("Format NOP tidak valid!");
      return;
    }

    try {
      const responsePBB = await axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/datobjekpajak?nop=${rawNop}`);
      if (responsePBB.status === 404) {
        router.push("/pendataan/op_update");
      }

      const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/checkdatoppajak/${rawNop}?pel=${13}`);
      const { code, data, message } = response.data;

      if (code === 280 && data === null) {
        toast.success(message || "NOP belum terdaftar, lanjut hapus!");
        router.push(`/pendataan/op_hapus/${rawNop}`);
      } else if (code === 290 && data) {
        toast.error(message || "NOP sudah terdaftar sebagai OP Hapus!");
      } else {
        toast.error("Respons server tidak dikenali.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        const { message } = error.response.data;
        toast.error(message || "Data tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan saat mengecek NOP!");
      }
    }
  };

  const handleBack = () => {
    router.push("/pendataan/op_hapus");
  };

  return (
    <>
      <Toaster position="top-center" />
      <Box width={"fullwidth"} height={{ sx: "100%", md: "100vh" }} sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} p={4}>
          <Typography variant="h5" sx={{ color: "#000" }}>
            Masukkan NOP
          </Typography>
          <TextField label="NOP" value={nop} onChange={handleNopChange} error={!!error} helperText={error} sx={{ flexGrow: 1, width: { md: "30vw" } }} />
          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!nop || !!error}>
              Cari
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBack}>
              Kembali
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchNOP;
