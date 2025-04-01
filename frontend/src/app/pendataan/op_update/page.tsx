"use client";
import { Box, Button, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatNop } from "@/utils/formatNOP";
import { validateNOP } from "@/utils/validateNOP";
import { useRouter } from "next/navigation";
import { getJenisBumiLabel } from "@/utils/labelData";

const OpUpdate = () => {
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [nop, setNop] = useState("");
  const [rawNop, setRawNop] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdate`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching  data:", error);
    }
  };

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdatebynop?nop=${rawNop}`);
      setData([response.data.data]);
      setIsSearching(true);
    } catch (error) {
      console.error("Error fetching search data:", error);
      setIsSearching(false);
    }
  };

  // Ambil data saat pertama kali load
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  // handle on change search nop
  const handleNopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Hanya angka
    setRawNop(value);

    const formattedNop = formatNop(value); // Format ulang berdasarkan angka saja
    setNop(formattedNop);

    if (!value) {
      setError(""); // Hapus error jika input kosong
      setIsSearching(false);
    } else if (formattedNop.length === 24 && validateNOP(formattedNop)) {
      setError("");
    } else {
      setError("Format NOP tidak valid (XX.XX.XXX.XXX.XXX.XXXX.X)");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setRawNop((prev) => prev.slice(0, -1)); // Hapus angka terakhir sebelum formatting
      setNop(formatNop(rawNop.slice(0, -1))); // Update tampilan dengan format baru
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoToSearch = () => {
    router.push("/pendataan/op_update/search_nop");
  };

  return (
    <>
      <Box width={"fullwidth"} height={"95vh"} sx={{ backgroundColor: "#FFF", borderRadius: "16px" }}>
        <Box display={"flex"} justifyContent="center" alignItems="center">
          <Box sx={{ paddingY: "20px", paddingX: "24px", color: "#000", borderRadius: "16px" }} width={{ md: "40vw" }}>
            <Typography sx={{ paddingBottom: "20px", textAlign: "center" }}>PENCARIAN NOP</Typography>
            <Box display={{ md: "flex" }} alignItems="center" gap="8px">
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                sx={{
                  flexGrow: 1,
                  "& input::-webkit-search-cancel-button": { display: "none" }, // Hapus tombol "X" di Chrome
                  "& input[type=search]::-ms-clear": { display: "none" }, // Hapus tombol "X" di Edge
                }}
                value={nop}
                onChange={handleNopChange}
                error={!!error}
                helperText={error}
                onKeyDown={handleKeyDown}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={fetchSearchData}
                // disabled={!isLoggedIn || loading}
                sx={{
                  mt: { xs: 2, md: 0 },
                  maxWidth: 100,
                  bgcolor: "#FFC107",
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#E0A800",
                  },
                }}
              >
                Cari
              </Button>
              <IconButton
                onClick={handleRefresh}
                color="error"
                sx={{
                  visibility: isSearching ? "visible" : "hidden", // Tetap mempertahankan ukuran
                  pointerEvents: isSearching ? "auto" : "none", // Tidak bisa diklik jika tidak searching
                  transition: "opacity 0.3s ease-in-out",
                  opacity: isSearching ? 1 : 0,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Divider />
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
            startIcon={<AddIcon />}
            onClick={handleGoToSearch}
          >
            Update
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <TableContainer component={Paper} sx={{ mt: 3, width: "70vw" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    NOP
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    Luas Bumi
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    Jenis Bumi
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    kode ZNT
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    Petugas
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    Tanggal Input
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                    Aksi
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.length > 0 ? (
                  data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {row.kd_prov}.{row.kd_kab}.{row.kd_kec}.{row.kd_kel}.{row.kd_blok}.{row.no_urut}.{row.kd_jns_op}
                      </TableCell>
                      <TableCell align="center">{row.total_luas_bumi}</TableCell>
                      <TableCell align="center">{getJenisBumiLabel(row.jns_bumi)}</TableCell>
                      <TableCell align="center">{row.kd_znt}</TableCell>
                      <TableCell align="center">{row.user_pelayanan}</TableCell>
                      <TableCell align="center">{moment(row.tgl_pelayanan).format("DD MMMM YYYY")}</TableCell>
                      <TableCell align="center">
                        <IconButton sx={{ color: "#219EBC" }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#FB8500" }}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      Data tidak ditemukan
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default OpUpdate;
