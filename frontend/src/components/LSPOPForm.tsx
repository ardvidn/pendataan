import React from "react";
import { Box, TextField, Typography, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatNop } from "@/utils/formatNOP";

interface SpopFormProps {
  nop: string;
}

const LspopAwal = ({ nop }: SpopFormProps) => {
  const dataBangunan = [
    {
      no: 1,
      jenis: "01 - PERUMAHAN",
      luas: 84,
      lantai: 1,
      tahun: 2015,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Form Transaksi */}
      <Box sx={{ mb: 3 }} width={{ md: 1 / 5 }}>
        <TextField fullWidth label="Jenis Transaksi *" value="PEMUTAKHIRAN DATA BANGUNAN" sx={{ mb: 2 }} disabled />
        <TextField fullWidth label="NOP *" value={formatNop(nop)} disabled />
      </Box>

      {/* Judul Daftar Objek Bangunan */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          py: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" mx="auto">
          Daftar Objek Bangunan
        </Typography>
        <Button variant="contained" color="info" size="small">
          + Objek Bangunan
        </Button>
      </Box>

      {/* Tabel */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <TableContainer sx={{ mt: 3, width: "70vw" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "red" }}>
                  No Bangunan
                </TableCell>
                <TableCell align="center" sx={{ color: "red" }}>
                  Jenis Bangunan
                </TableCell>
                <TableCell align="center" sx={{ color: "red" }}>
                  Luas Bangunan
                </TableCell>
                <TableCell align="center" sx={{ color: "red" }}>
                  Jumlah Lantai
                </TableCell>
                <TableCell align="center" sx={{ color: "red" }}>
                  Tahun Dibangun
                </TableCell>
                <TableCell align="center" sx={{ color: "red" }}>
                  Aksi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataBangunan.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.no}</TableCell>
                  <TableCell align="center">{item.jenis}</TableCell>
                  <TableCell align="center">{item.luas}</TableCell>
                  <TableCell align="center">{item.lantai}</TableCell>
                  <TableCell align="center">{item.tahun}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default LspopAwal;
