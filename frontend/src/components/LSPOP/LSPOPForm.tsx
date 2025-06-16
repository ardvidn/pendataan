/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatNop } from "../../utils/formatNOP";
import BuildingModal from "./BuildingModal";
import { kodeJpb } from "../../utils/labelData";
import { BuildingData } from "../../utils/interface";

interface lspopProps {
  lspopData: any;
  setLspopData: React.Dispatch<React.SetStateAction<any>>;
  nop: string;
  onValidityChange: (isValid: boolean) => void;
}

export const LSPOPForm = ({ nop, lspopData, setLspopData, onValidityChange }: lspopProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBuilding, setCurrentBuilding] = useState<BuildingData>({
    no_bng: "",
    kd_jpb: "",
    bng_luas: "",
    bng_jml_lantai: "",
    bng_thn_dibangun: "",
    bng_thn_renovasi: "",
    bng_kd_kondisi: "",
    bng_kd_konstruksi: "",
    bng_kd_atap: "",
    bng_kd_dinding: "",
    bng_kd_lantai: "",
    bng_kd_langit_langit: "",
    jnsTransaksiBng: "",
  });

  const handleSave = (data: BuildingData) => {
    const isEdit = lspopData.some((b: any) => b.no_bng === data.no_bng);

    if (isEdit) {
      setLspopData(lspopData.map((b: any) => (b.no_bng === data.no_bng ? data : b)));
    } else {
      setLspopData([...lspopData, data]);
    }

    setModalOpen(false);
  };

  const handleEdit = (building: BuildingData) => {
    setCurrentBuilding(building);
    setModalOpen(true);
  };

  const handleDelete = (no_bng: string) => {
    if (window.confirm("Yakin ingin menghapus bangunan ini?")) {
      setLspopData(lspopData.filter((b: any) => b.no_bng !== no_bng));
    }
  };

  const getNextNoBng = (buildings: BuildingData[]): string => {
    const usedNumbers = buildings.map((b) => parseInt(b.no_bng || "0", 10)).filter((n) => !isNaN(n));

    const maxNo = usedNumbers.length ? Math.max(...usedNumbers) : 0;
    return (maxNo + 1).toString();
  };

  useEffect(() => {
    const isValid = lspopData.length !== 0;
    onValidityChange(isValid);
  }, [lspopData.length, onValidityChange]);

  return (
    <Box width="100%">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <TextField sx={{ width: { md: 1 / 4 }, mt: 2 }} label="Nomor Objek Pajak" value={formatNop(nop)} disabled />
        <Button
          variant="contained"
          onClick={() => {
            const newNoBng = getNextNoBng(lspopData);
            setCurrentBuilding({
              no_bng: newNoBng,
              kd_jpb: "",
              bng_luas: "",
              bng_jml_lantai: "",
              bng_thn_dibangun: "",
              bng_thn_renovasi: "",
              bng_kd_kondisi: "",
              bng_kd_konstruksi: "",
              bng_kd_atap: "",
              bng_kd_dinding: "",
              bng_kd_lantai: "",
              bng_kd_langit_langit: "",
              jnsTransaksiBng: "1",
            });
            setModalOpen(true);
          }}
          sx={{
            mt: 2,
          }}
        >
          + Tambah Bangunan
        </Button>
      </Box>
      <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
        <Box sx={{ width: "70vw" }}>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#f5f5f5" }}>
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
                {lspopData ? (
                  lspopData.map((building: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell align="center">{building.no_bng}</TableCell>
                      <TableCell align="center">{kodeJpb[parseInt(building.kd_jpb) - 1]}</TableCell>
                      <TableCell align="center">{building.bng_luas} m²</TableCell>
                      <TableCell align="center">{building.bng_jml_lantai}</TableCell>
                      <TableCell align="center">{building.bng_thn_dibangun}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handleEdit(building)}>
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(building.no_bng)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Belum ada data bangunan
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <BuildingModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} building={currentBuilding} nextNoBng={currentBuilding.no_bng} />
    </Box>
  );
};
