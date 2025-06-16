/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RoleOptions } from "@/utils/interface";
import axios from "axios";

interface TambahRoleModalProps {
  open: boolean;
  mode: "add" | "edit";
  initialData?: RoleOptions;
  onClose: () => void;
  onAdd: (data: RoleOptions) => Promise<void>;
  onEdit: (data: RoleOptions) => Promise<void>;
}

const TambahRoleModal: React.FC<TambahRoleModalProps> = ({ open, mode, initialData, onClose, onAdd, onEdit }) => {
  const [roleName, setRoleName] = useState("");
  const [aksesAdmin, setAksesAdmin] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (mode === "edit" && initialData?.id) {
        try {
          const res = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrolebyid/${initialData.id}`);
          const fetched = res.data.data;

          setRoleName(fetched.Role);
          setAksesAdmin(fetched.akses);
        } catch (error) {
          console.error("Gagal ambil data role:", error);
        }
      } else {
        setRoleName("");
        setAksesAdmin(false);
      }
    };

    if (open) fetchData();
  }, [mode, initialData?.id, open]);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setRoleName(initialData.Role);
      setAksesAdmin(initialData.Akses);
    } else {
      setRoleName("");
      setAksesAdmin(false);
    }
  }, [mode, initialData, open]);

  const handleSubmit = async () => {
    if (roleName.trim() === "") {
      setError(true);
      return;
    }

    const payload: RoleOptions = {
      ...(initialData && { id: initialData.id }),
      Role: roleName,
      Akses: aksesAdmin,
    };

    try {
      if (mode === "edit") {
        await onEdit(payload);
      } else {
        await onAdd(payload);
      }
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Gagal menyimpan role:", error);
    }
  };

  const handleClose = () => {
    setRoleName("");
    setAksesAdmin(false);
    setError(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{mode === "edit" ? "Edit Role" : "Tambah Role"}</DialogTitle>
      <DialogContent>
        <TextField label="Nama Role" fullWidth required value={roleName} onChange={(e) => setRoleName(e.target.value)} error={error} helperText={error ? "Nama Role harus diisi" : ""} margin="normal" />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Akses Admin Dashboard</FormLabel>
          <RadioGroup row value={aksesAdmin ? "true" : "false"} onChange={(e) => setAksesAdmin(e.target.value === "true")}>
            <FormControlLabel value="true" control={<Radio />} label="YA" />
            <FormControlLabel value="false" control={<Radio />} label="TIDAK" />
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} startIcon={<ArrowBackIcon />} sx={{ color: "#023047" }}>
          Kembali
        </Button>
        <Button onClick={handleSubmit} variant="contained" startIcon={<SaveIcon />} sx={{ color: "#000", backgroundColor: "#FFC107" }}>
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TambahRoleModal;
