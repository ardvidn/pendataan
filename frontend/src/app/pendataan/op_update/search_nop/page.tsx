/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { formatNop } from "../../../../utils/formatNOP";
import { validateNOP } from "../../../../utils/validateNOP";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
      return; // berhenti kalau format tidak valid
    }

    try {
      const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/checkdatoppajak/${rawNop}`);
      const { code, data, message } = response.data;

      if (code === 280 && data === null) {
        toast.success(message || "NOP belum terdaftar, lanjut update!");
        router.push(`/pendataan/op_update/${rawNop}`);
      } else if (code === 290 && data) {
        toast.error(message || "NOP sudah terdaftar sebagai OP Update!");
      } else {
        toast.error("Respons server tidak dikenali.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengecek NOP!");
      console.error("Error fetching data:", error);
    }
  };

  const handleBack = () => {
    router.push("/pendataan/op_update");
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
