/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl, Autocomplete } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { UserOptions } from "@/utils/interface";
import axios from "axios";

interface TambahUserModalProps {
  open: boolean;
  mode: "add" | "edit";
  initialData?: UserOptions;
  onClose: () => void;
  onAdd: (data: UserOptions) => Promise<void>;
  onEdit: (data: UserOptions) => Promise<void>;
}

const TambahUserModal: React.FC<TambahUserModalProps> = ({ open, mode, initialData, onClose, onAdd, onEdit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [rolesOptions, setRolesOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrole`);
        if (Array.isArray(res.data.data)) {
          setRolesOptions(res.data.data.map((item: any) => item.Role));
        }
      } catch (error) {
        console.error("Gagal ambil data role:", error);
      }
    };

    if (open) {
      fetchRoles();
    }
  }, [open]);

  useEffect(() => {
    const fetchData = async () => {
      if (mode === "edit" && initialData?.id) {
        try {
          const res = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getuseraccountbyid/${initialData.id}`);
          const fetched = res.data.data;

          setUsername(fetched.username);
          setPassword(fetched.password);
          setRole(fetched.role);
          setStatus(fetched.status);
        } catch (error) {
          console.error("Gagal ambil data user:", error);
        }
      } else {
        setUsername("");
        setPassword("");
        setRole("");
        setStatus(false);
      }
    };

    if (open) fetchData();
  }, [mode, initialData?.id, open]);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setUsername(initialData.username);
      setRole(initialData.role);
      setStatus(initialData.status);
    } else {
      setUsername("");
      setRole("");
      setStatus(false);
    }
  }, [mode, initialData, open]);

  const handleSubmit = async () => {
    const payload: UserOptions = {
      ...(initialData && { id: initialData.id }),
      username,
      role,
      status,
      ...(mode === "add" && { password }),
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
      console.error("Gagal menyimpan user:", error);
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setRole("");
    setStatus(false);
    setError(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{mode === "edit" ? "Edit User" : "Tambah User"}</DialogTitle>
      <DialogContent>
        <TextField label="Username" fullWidth required value={username} onChange={(e) => setUsername(e.target.value)} error={error} helperText={error ? "Nama Role harus diisi" : ""} margin="normal" />

        {mode === "add" && <TextField label="Password" fullWidth required type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />}

        <Autocomplete
          fullWidth
          options={rolesOptions}
          value={role}
          onChange={(_, newValue) => setRole(newValue || "")}
          renderInput={(params) => <TextField {...params} label="Role" required error={error} helperText={error ? "Role harus dipilih" : ""} margin="normal" />}
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Status Aktif?</FormLabel>
          <RadioGroup row value={status ? "true" : "false"} onChange={(e) => setStatus(e.target.value === "true")}>
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

export default TambahUserModal;
