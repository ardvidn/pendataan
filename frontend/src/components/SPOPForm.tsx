import React from "react";
import { TextField, Autocomplete, Button, Grid } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormLSPOP = ({ formData, setFormData }: any) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          options={["Bangunan Rumah", "Gedung Kantor", "Pabrik", "Ruko"]}
          value={formData.jenisBangunan}
          onChange={(event, newValue) => setFormData({ ...formData, jenisBangunan: newValue })}
          renderInput={(params) => <TextField {...params} label="Jenis Bangunan" fullWidth />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Luas Bangunan" type="number" fullWidth value={formData.luasBangunan} onChange={(e) => setFormData({ ...formData, luasBangunan: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Jumlah Lantai" type="number" fullWidth value={formData.jumlahLantai} onChange={(e) => setFormData({ ...formData, jumlahLantai: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Tahun Dibangun" type="number" fullWidth value={formData.tahunDibangun} onChange={(e) => setFormData({ ...formData, tahunDibangun: e.target.value })} />
      </Grid>
    </Grid>
  );
};

const FormLokasi = ({ formData, setFormData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField label="Latitude" type="number" fullWidth value={formData.latitude} onChange={(e) => setFormData({ ...formData, latitude: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Longitude" type="number" fullWidth value={formData.longitude} onChange={(e) => setFormData({ ...formData, longitude: e.target.value })} />
      </Grid>
    </Grid>
  );
};

export { FormLSPOP, FormLokasi };
