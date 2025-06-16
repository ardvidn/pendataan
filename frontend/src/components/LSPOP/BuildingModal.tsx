"use client";
import { Box, Typography, TextField, Autocomplete, Button, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCallback, useEffect, useState } from "react";
import { atapBangunanOptions, dindingBangunanOptions, kodeJpb, kondisiBangunanOptions, konstruksiBangunanOptions, langitLangitBangunanOptions, lantaiBangunanOptions } from "../../utils/labelData";

interface BuildingData {
  id?: string;
  no_bng: string;
  kd_jpb: string;
  bng_luas: string;
  bng_jml_lantai: string;
  bng_thn_dibangun: string;
  bng_thn_renovasi: string;
  bng_kd_kondisi: string;
  bng_kd_konstruksi: string;
  bng_kd_atap: string;
  bng_kd_dinding: string;
  bng_kd_lantai: string;
  bng_kd_langit_langit: string;
  jnsTransaksiBng: string;
}

interface BuildingModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: BuildingData) => void;
  building?: BuildingData | null;
  nextNoBng: string;
}

export const BuildingModal = ({ open, onClose, onSave, building, nextNoBng }: BuildingModalProps) => {
  const getDefaultData = useCallback(
    (): BuildingData => ({
      no_bng: nextNoBng,
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
    }),
    [nextNoBng]
  );
  const [tempData, setTempData] = useState<BuildingData>(getDefaultData());

  useEffect(() => {
    if (!open) {
      setTempData(getDefaultData());
    } else if (building) {
      setTempData(building);
    }
  }, [building, getDefaultData, open]);

  const handleChange = (field: keyof BuildingData, value: string) => {
    setTempData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    const { kd_jpb, bng_luas, bng_jml_lantai, bng_thn_dibangun, bng_kd_kondisi, bng_kd_konstruksi, bng_kd_atap, bng_kd_dinding, bng_kd_lantai, bng_kd_langit_langit } = tempData;

    return kd_jpb && bng_luas && bng_jml_lantai && bng_thn_dibangun && bng_kd_kondisi && bng_kd_konstruksi && bng_kd_atap && bng_kd_dinding && bng_kd_lantai && bng_kd_langit_langit;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("Semua field wajib harus diisi!");
      return;
    }
    onSave({ ...tempData });
  };

  return (
    <Box
      sx={{
        display: open ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.5)",
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "600px" },
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, backgroundColor: "#FFC107", px: 2 }}>
          <Typography sx={{ color: "#023047" }} variant="h6">
            Bangunan
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label="Nomor Bangunan" value={nextNoBng || ""} disabled />
            <Autocomplete
              fullWidth
              options={kodeJpb}
              value={tempData.kd_jpb || ""}
              onChange={(event, newValue) => handleChange("kd_jpb", newValue?.replace(/\t/g, " ") || "")}
              renderInput={(params) => <TextField {...params} label="Jenis Bangunan *" fullWidth />}
            />
            {/* <Autocomplete
              fullWidth
              options={kodeJpb}
              getOptionLabel={(option) => option.label}
              value={tempData.kd_jpb ? kodeJpb.find((opt) => opt.kode === tempData.kd_jpb) || null : null}
              isOptionEqualToValue={(option, value) => option.kode === value?.kode}
              onChange={(_, newValue) => {
                handleChange("kd_jpb", newValue?.kode || "");
              }}
              renderInput={(params) => <TextField {...params} label="Jenis Bangunan *" fullWidth value={tempData.kd_jpb ? getLabelFromKode(kodeJpb, tempData.kd_jpb) : ""} />}
            /> */}
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth type="number" label="Luas Bangunan (m²) *" value={tempData.bng_luas || ""} onChange={(e) => handleChange("bng_luas", e.target.value)} />
            <TextField fullWidth label="Jumlah Lantai" type="number" value={tempData.bng_jml_lantai} onChange={(e) => handleChange("bng_jml_lantai", e.target.value)} />
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth type="number" label="Tahun Dibangun" value={tempData.bng_thn_dibangun || ""} onChange={(e) => handleChange("bng_thn_dibangun", e.target.value)} />
            <TextField fullWidth type="number" label="Tahun Direnovasi" value={tempData.bng_thn_renovasi} onChange={(e) => handleChange("bng_thn_renovasi", e.target.value)} />
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={kondisiBangunanOptions}
              value={tempData.bng_kd_kondisi || ""}
              onChange={(_, newValue) => handleChange("bng_kd_kondisi", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Kondisi Bangunan *" fullWidth />}
            />
            <Autocomplete
              fullWidth
              options={konstruksiBangunanOptions}
              value={tempData.bng_kd_konstruksi || ""}
              onChange={(_, newValue) => handleChange("bng_kd_konstruksi", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Konstruksi Bangunan *" fullWidth />}
            />
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={atapBangunanOptions}
              value={tempData.bng_kd_atap || ""}
              onChange={(_, newValue) => handleChange("bng_kd_atap", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Atap Bangunan *" fullWidth />}
            />
            <Autocomplete
              fullWidth
              options={dindingBangunanOptions}
              value={tempData.bng_kd_dinding || ""}
              onChange={(_, newValue) => handleChange("bng_kd_dinding", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Dinding Bangunan *" fullWidth />}
            />
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={lantaiBangunanOptions}
              value={tempData.bng_kd_lantai || ""}
              onChange={(_, newValue) => handleChange("bng_kd_lantai", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Lantai Bangunan *" fullWidth />}
            />
            <Autocomplete
              fullWidth
              options={langitLangitBangunanOptions}
              value={tempData.bng_kd_langit_langit || ""}
              onChange={(_, newValue) => handleChange("bng_kd_langit_langit", newValue || "")}
              renderInput={(params) => <TextField {...params} label="Langit-Langit Bangunan *" fullWidth />}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Batal
          </Button>
          <Button variant="contained" onClick={handleSubmit} disabled={!isFormValid()}>
            Simpan
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BuildingModal;
