/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatNop } from "../../../utils/formatNOP";
import { validateNOP } from "../../../utils/validateNOP";
import { useRouter } from "next/navigation";
import { getJenisBumiLabel } from "../../../utils/labelData";
import { formatRibuan } from "../../../utils/FormatForm";
import toast, { Toaster } from "react-hot-toast";

interface dataProps {
  kd_prov: string;
  kd_kab: string;
  kd_kec: string;
  kd_kel: string;
  kd_blok: string;
  no_urut: string;
  kd_jns_op: string;
  total_luas_bumi: number;
  jns_bumi: string;
  kd_znt: string;
  user_pelayanan: string;
  tgl_pelayanan: string;
}

const OpHapus = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [nop, setNop] = useState("");
  const [rawNop, setRawNop] = useState("");
  const router = useRouter();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [, setTotalPages] = useState(1);

  const fetchData = useCallback(
    async (page = 1, limit = itemsPerPage) => {
      try {
        const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdate?page=${page}&limit=${limit}&pel=${11}`);
        setData(response.data.data);
        setTotalItems(response.data.total);
        setTotalPages(response.data.totalPages);
        setCurrentPage(page);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          const { message } = error.response.data;
          toast.error(message || "Data tidak ditemukan!");
        } else {
          toast.error("Terjadi kesalahan saat mengecek NOP!");
        }
        console.error("Error fetching data:", error);
      }
    },
    [itemsPerPage]
  );

  const fetchSearchData = async (page = 1, limit = itemsPerPage) => {
    try {
      const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdatebysearch?nop=${rawNop}&page=${page}&limit=${limit}&pel=${11}`);
      setData(response.data.data);
      setTotalItems(response.data.total);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
      setIsSearching(true);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        const { message } = error.response.data;
        toast.error(message || "Data tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan saat mengecek NOP!");
      }
      console.error("Error fetching data:", error);
      setIsSearching(false);
    }
  };

  // Ambil data saat pertama kali load
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // handle on change search nop
  const handleNopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Hanya angka
    setRawNop(value);

    const formattedNop = formatNop(value); // Format ulang berdasarkan angka saja
    setNop(formattedNop);

    if (!value) {
      setError(""); // Hapus error jika input kosong
      setIsSearching(false);
      fetchData();
    } else if (formattedNop.length === 24 && validateNOP(formattedNop)) {
      setError("");
    } else {
      setError("Format NOP tidak valid (XX.XX.XXX.XXX.XXX.XXXX.X)");
    }
  };

  const handleItemsPerPageChange = (e: any) => {
    const newItemsPerPage = e.target.value;
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handlePageChange = (newPage: number) => {
    if (isSearching) {
      fetchSearchData(newPage, itemsPerPage);
    } else {
      fetchData(newPage, itemsPerPage);
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
    router.push("/pendataan/op_baru/form");
  };

  const handleEditButton = (nop: string) => {
    router.push(`/pendataan/op_baru/${nop}?source=edit`);
  };

  const handleDeleteButton = async (nop: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/deleteobjekpajak/${nop}`);
      toast.success(`berhasil menghapus data!!!`);
    } catch (error) {
      toast.error("error saat menghapus data!!!");
      console.error("Error delete data:", error);
    } finally {
      fetchData();
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Box width={"fullwidth"} height={"100%"} sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
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
                onBlur={() => {
                  // Jika kosong, hapus error
                  if (!nop) {
                    setError("");
                  } else {
                    // Atau lakukan validasi ulang di sini jika perlu
                    const isValid = /^\d{18}$/.test(rawNop);
                    setError(isValid ? "" : "Format NOP harus 18 digit angka.");
                  }
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default form submission if needed
                  fetchSearchData(); // Call with default parameters
                }}
                // disabled={!isLoggedIn || loading}
                sx={{
                  mt: { xs: 1, md: 0 },
                  ml: { xs: 0, md: 0 },
                  maxWidth: 70,
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
            Baru
          </Button>
        </Box>
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <Box sx={{ width: "70vw" }}>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
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
                        <TableCell align="center">{formatRibuan(row.total_luas_bumi)}</TableCell>
                        <TableCell align="center">{getJenisBumiLabel(row.jns_bumi)}</TableCell>
                        <TableCell align="center">{row.kd_znt}</TableCell>
                        <TableCell align="center">{row.user_pelayanan}</TableCell>
                        <TableCell align="center">{moment(row.tgl_pelayanan).format("DD MMMM YYYY")}</TableCell>
                        <TableCell align="center">
                          <IconButton sx={{ color: "#219EBC" }} onClick={() => handleEditButton(`${row.kd_prov}${row.kd_kab}${row.kd_kec}${row.kd_kel}${row.kd_blok}${row.no_urut}${row.kd_jns_op}`)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton sx={{ color: "#FB8500" }} onClick={() => handleDeleteButton(`${row.kd_prov}${row.kd_kab}${row.kd_kec}${row.kd_kel}${row.kd_blok}${row.no_urut}${row.kd_jns_op}`)}>
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
          {/* Pagination Controls */}
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} mt={2}>
            {/* <Typography variant="body2">{`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}`}</Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <FormControl size="small" sx={{ minWidth: 80 }}>
                <InputLabel>Show</InputLabel>
                <Select value={itemsPerPage} onChange={handleItemsPerPageChange} label="Show">
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>

              <Box display="flex" alignItems={"center"} gap={1}>
                <Button variant="outlined" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                  Previous
                </Button>
                <Button variant="outlined" disabled={currentPage >= totalPages || totalPages === 0} onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </Button>
                <Typography color="#023047" variant="body1">
                  {totalItems > 0 ? `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}` : "0 of 0"}
                </Typography>
              </Box>
            </Box> */}
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} mt={2}>
              <TablePagination
                component="div"
                count={totalItems}
                page={currentPage - 1} // TablePagination menggunakan zero-based index
                onPageChange={(event: any, newPage: number) => handlePageChange(newPage + 1)} // Konversi ke one-based index
                rowsPerPage={itemsPerPage}
                onRowsPerPageChange={(event: any) => {
                  handleItemsPerPageChange(event);
                  handlePageChange(1); // Reset ke halaman pertama saat mengubah items per page
                }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                labelRowsPerPage="Show:"
                labelDisplayedRows={({ from, to, count }: any) => `${from}-${to} of ${count}`}
                sx={{
                  ".MuiTablePagination-toolbar": {
                    padding: 0,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  },
                  ".MuiTablePagination-spacer": {
                    display: "none",
                  },
                  ".MuiTablePagination-selectLabel": {
                    margin: 0,
                  },
                  ".MuiTablePagination-displayedRows": {
                    margin: 0,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OpHapus;
