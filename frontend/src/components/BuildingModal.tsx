import { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Autocomplete,
  Button,
  Grid,
  Divider
} from '@mui/material';

const BuildingModal = ({
  open,
  onClose,
  onSave,
  building,
  jenisBangunanOptions,
  kondisiBangunanOptions,
  konstruksiBangunanOptions,
  atapBangunanOptions,
  dindingBangunanOptions,
  lantaiBangunanOptions,
  langitLangitBangunanOptions
}: any) => {
  const [buildingData, setBuildingData] = useState({
    jenisBangunan: '',
    luasBangunan: '',
    jumlahLantai: '',
    tahunDibangun: '',
    tahunRenovasi: '',
    kondisiBangunan: '',
    konstruksiBangunan: '',
    atapBangunan: '',
    dindingBangunan: '',
    lantaiBangunan: '',
    langitLangitBangunan: '',
    dayaListrik: ''
  });

  useEffect(() => {
    if (building) {
      setBuildingData(building);
    } else {
      setBuildingData({
        jenisBangunan: '',
        luasBangunan: '',
        jumlahLantai: '',
        tahunDibangun: '',
        tahunRenovasi: '',
        kondisiBangunan: '',
        konstruksiBangunan: '',
        atapBangunan: '',
        dindingBangunan: '',
        lantaiBangunan: '',
        langitLangitBangunan: '',
        dayaListrik: ''
      });
    }
  }, [building]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBuildingData({ ...buildingData, [name]: value });
  };

  const handleAutocompleteChange = (name: string, value: any) => {
    setBuildingData({ ...buildingData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(buildingData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '800px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <Typography variant="h6" gutterBottom>
          {building ? 'Edit Bangunan' : 'Tambah Bangunan Baru'}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={jenisBangunanOptions}
              value={buildingData.jenisBangunan || ''}
              onChange={(e, newValue) => handleAutocompleteChange('jenisBangunan', newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Jenis Bangunan" fullWidth />
              )}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Luas Bangunan (m²)"
              name="luasBangunan"
              type="number"
              value={buildingData.luasBangunan || ''}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Jumlah Lantai"
              name="jumlahLantai"
              type="number"
              value={buildingData.jumlahLantai || ''}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tahun Dibangun"
              name="tahunDibangun"
              type="number"
              value={buildingData.tahunDibangun || ''}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tahun Renovasi"
              name="tahunRenovasi"
              type="number"
              value={buildingData.tahunRenovasi || ''}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={kondisiBangunanOptions}
              value={buildingData.kondisiBangunan || ''}
              onChange={(e, newValue) => handleAutocompleteChange('kondisiBangunan', newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Kondisi Bangunan" fullWidth />
              )} />