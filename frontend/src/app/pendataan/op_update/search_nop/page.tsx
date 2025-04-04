"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { formatNop } from "@/utils/formatNOP";
import { validateNOP } from "@/utils/validateNOP";

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

  const handleSubmit = () => {
    if (!validateNOP(nop)) {
      setError("Format NOP tidak valid!");
    }
    router.push(`/pendataan/op_update/${rawNop}`);
  };

  const handleBack = () => {
    router.push("/pendataan/op_update");
  };

  return (
    <Box width={"fullwidth"} height={"95vh"} sx={{ backgroundColor: "#FFF", borderRadius: "16px" }}>
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
  );
};

export default SearchNOP;
