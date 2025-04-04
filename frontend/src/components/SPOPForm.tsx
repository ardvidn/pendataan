"use client";
import { useState, useEffect } from "react";
import { Box, TextField, Autocomplete, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Divider, Typography, Stack, Grid2 } from "@mui/material";

interface SpopFormProps {
  nop: string;
}

export const SPOPForm = ({ nop }: SpopFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [spopData, setSpopData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // const [showLahanKeterangan, setShowLahanKeterangan] = useState(false);

  // Mock data for autocomplete options
  //   const statusWpOptions = ['Pribadi', 'Badan', 'Pemerintah'];
  //   const jenisBumiOptions = ['Tanah Kosong', 'Tanah Bangunan', 'Tanah Pertanian'];
  //   const zntOptions = ['ZNT 1', 'ZNT 2', 'ZNT 3'];
  //   const jenisAsalTanahOptions = ['Hak Milik', 'Hak Guna Bangunan', 'Hak Pakai'];
  //   const jenisWpOptions = ['Pribadi', 'Badan', 'Pemerintah'];
  //   const jenisIdentitasOptions = ['KTP', 'SIM', 'Passport'];
  //   const jenisKelaminOptions = ['Laki-laki', 'Perempuan'];
  //   const provinsiOptions = ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur'];
  //   const pekerjaanOptions = ['PNS', 'Swasta', 'Wiraswasta'];

  useEffect(() => {
    // Fetch existing SPOP data based on NOP
    const fetchSpopData = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/spop/${nop}`);
        // const data = await response.json();
        setSpopData({
          noSertifikat: "12345",
          alamat: "Sample address",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching SPOP data:", error);
        setLoading(false);
      }
    };

    if (nop) {
      fetchSpopData();
    }
  }, [nop]);

  if (loading) {
    return <Typography>Loading SPOP data...</Typography>;
  }

  if (!spopData) {
    return <Typography>Data SPOP tidak ditemukan untuk NOP: {nop}</Typography>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpopData({ ...spopData, [name]: value });
  };

  //   const handleDateChange = (name: string, value: Date | null) => {
  //     setSpopData({ ...spopData, [name]: value });
  //   };

  //   const handleAutocompleteChange = (name: string, value: any) => {
  //     setSpopData({ ...spopData, [name]: value });
  //   };

  //   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setSpopData({ ...spopData, [name]: value });

  //     if (name === 'lahanProduksiPangan' && value === 'Benar') {
  //       setShowLahanKeterangan(true);
  //     } else if (name === 'lahanProduksiPangan' && value === 'Tidak Benar') {
  //       setShowLahanKeterangan(false);
  //     }
  //   };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DateInput = ({ label, name, value, onChange }: any) => <TextField fullWidth label={label} name={name} type="date" value={value || ""} onChange={onChange} InputLabelProps={{ shrink: true }} />;

  if (loading) return <Typography>Loading...</Typography>;
  if (!spopData) return <Typography>Data tidak ditemukan</Typography>;

  return (
    <Box marginX={4}>
      {/* Data Letak Wajib Pajak */}
      <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
        Data Letak Wajib Pajak
      </Typography>
      <Divider />
      <Grid2></Grid2>

      <Box sx={{ flexGrow: 1 }} display={"flex"} mt={4}>
        <Grid2 container spacing={2} columns={2}>
          <Grid2>
            <TextField fullWidth label="No Sertifikat" name="noSertifikat" value={spopData.noSertifikat || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <DateInput
              label="Tanggal Sertifikat"
              name="tanggalSertifikat"
              value={spopData.tanggalSertifikat}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => handleChange(e)}
            />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Alamat" name="alamat" value={spopData.alamat || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Dusun/Lingkungan" name="dusun" value={spopData.dusun || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Blok/Kav/No" name="blok" value={spopData.blok || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="RT" name="rt" value={spopData.rt || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="RW" name="rw" value={spopData.rw || ""} onChange={handleChange} />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} columns={2}>
          <Grid2>
            <TextField fullWidth label="No Sertifikat" name="noSertifikat" value={spopData.noSertifikat || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <DateInput
              label="Tanggal Sertifikat"
              name="tanggalSertifikat"
              value={spopData.tanggalSertifikat}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => handleChange(e)}
            />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Alamat" name="alamat" value={spopData.alamat || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Dusun/Lingkungan" name="dusun" value={spopData.dusun || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="Blok/Kav/No" name="blok" value={spopData.blok || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="RT" name="rt" value={spopData.rt || ""} onChange={handleChange} />
          </Grid2>
          <Grid2>
            <TextField fullWidth label="RW" name="rw" value={spopData.rw || ""} onChange={handleChange} />
          </Grid2>
        </Grid2>
      </Box>

      {/* <Stack item xs={12} md={6}>
          <Autocomplete
            options={statusWpOptions}
            value={spopData.statusWp || ''}
            onChange={(e, newValue) => handleAutocompleteChange('statusWp', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Status WP" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Status Cabang</FormLabel>
            <RadioGroup
              row
              name="statusCabang"
              value={spopData.statusCabang || 'Bukan Cabang'}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Cabang" control={<Radio />} label="Cabang" />
              <FormControlLabel value="Bukan Cabang" control={<Radio />} label="Bukan Cabang" />
            </RadioGroup>
          </FormControl>
        </Stack> */}

      {/* Data Bumi */}
      {/* <Stack item xs={12}>
          <Typography variant="h6" gutterBottom>
            Data Bumi
          </Typography>
          <Divider />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="Luas Bumi"
            name="luasBumi"
            type="number"
            value={spopData.luasBumi || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={jenisBumiOptions}
            value={spopData.jenisBumi || ''}
            onChange={(e, newValue) => handleAutocompleteChange('jenisBumi', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Bumi" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={zntOptions}
            value={spopData.znt || ''}
            onChange={(e, newValue) => handleAutocompleteChange('znt', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="ZNT" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Jenis Peruntukan</FormLabel>
            <RadioGroup
              row
              name="jenisPeruntukan"
              value={spopData.jenisPeruntukan || 'Non Komersil'}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Komersil" control={<Radio />} label="Komersil" />
              <FormControlLabel value="Non Komersil" control={<Radio />} label="Non Komersil" />
            </RadioGroup>
          </FormControl>
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={jenisAsalTanahOptions}
            value={spopData.jenisAsalTanah || ''}
            onChange={(e, newValue) => handleAutocompleteChange('jenisAsalTanah', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Asal Tanah" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Lahan Produksi Pangan dan Ternak</FormLabel>
            <RadioGroup
              row
              name="lahanProduksiPangan"
              value={spopData.lahanProduksiPangan || 'Tidak Benar'}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Benar" control={<Radio />} label="Benar" />
              <FormControlLabel value="Tidak Benar" control={<Radio />} label="Tidak Benar" />
            </RadioGroup>
          </FormControl>
        </Stack>
        
        {showLahanKeterangan && (
          <Stack item xs={12}>
            <TextField
              fullWidth
              label="Keterangan Lahan Produksi Pangan dan Ternak"
              name="keteranganLahanProduksi"
              value={spopData.keteranganLahanProduksi || ''}
              onChange={handleChange}
            />
          </Stack>
        )} */}

      {/* Data Wajib Pajak */}
      {/* <Stack item xs={12}>
          <Typography variant="h6" gutterBottom>
            Data Wajib Pajak
          </Typography>
          <Divider />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={jenisWpOptions}
            value={spopData.jenisWp || ''}
            onChange={(e, newValue) => handleAutocompleteChange('jenisWp', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Wajib Pajak" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="No Identitas"
            name="noIdentitas"
            value={spopData.noIdentitas || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={jenisIdentitasOptions}
            value={spopData.jenisIdentitas || ''}
            onChange={(e, newValue) => handleAutocompleteChange('jenisIdentitas', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Identitas" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="Nama Wajib Pajak"
            name="namaWp"
            value={spopData.namaWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={jenisKelaminOptions}
            value={spopData.jenisKelamin || ''}
            onChange={(e, newValue) => handleAutocompleteChange('jenisKelamin', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Kelamin" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="Tempat Lahir"
            name="tempatLahir"
            value={spopData.tempatLahir || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <DatePicker
            label="Tanggal Lahir"
            value={spopData.tanggalLahir || null}
            onChange={(newValue) => handleDateChange('tanggalLahir', newValue)}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Stack>
        
        <Stack item xs={12}>
          <TextField
            fullWidth
            label="Alamat"
            name="alamatWp"
            value={spopData.alamatWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={4}>
          <TextField
            fullWidth
            label="Dusun/Lingkungan"
            name="dusunWp"
            value={spopData.dusunWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={4}>
          <TextField
            fullWidth
            label="Blok/Kav/No"
            name="blokWp"
            value={spopData.blokWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={2}>
          <TextField
            fullWidth
            label="RT"
            name="rtWp"
            value={spopData.rtWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={2}>
          <TextField
            fullWidth
            label="RW"
            name="rwWp"
            value={spopData.rwWp || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={provinsiOptions}
            value={spopData.provinsi || ''}
            onChange={(e, newValue) => handleAutocompleteChange('provinsi', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Provinsi" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={provinsiOptions} // Replace with actual kabupaten options
            value={spopData.kabupaten || ''}
            onChange={(e, newValue) => handleAutocompleteChange('kabupaten', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Kabupaten" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={provinsiOptions} // Replace with actual kecamatan options
            value={spopData.kecamatan || ''}
            onChange={(e, newValue) => handleAutocompleteChange('kecamatan', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Kecamatan" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={provinsiOptions} // Replace with actual kelurahan options
            value={spopData.kelurahan || ''}
            onChange={(e, newValue) => handleAutocompleteChange('kelurahan', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Kelurahan" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <Autocomplete
            options={pekerjaanOptions}
            value={spopData.pekerjaan || ''}
            onChange={(e, newValue) => handleAutocompleteChange('pekerjaan', newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Pekerjaan" fullWidth />
            )}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="Telepon"
            name="telepon"
            value={spopData.telepon || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={spopData.email || ''}
            onChange={handleChange}
          />
        </Stack>
        
        <Stack item xs={12} md={6}>
          <TextField
            fullWidth
            label="NPWP"
            name="npwp"
            value={spopData.npwp || ''}
            onChange={handleChange}
          />
        </Stack> */}

      {/* Foto */}
      {/* <Stack item xs={12}>
          <Typography variant="h6" gutterBottom>
            Foto (Maksimal 3 gambar, ukuran maksimal 5MB)
          </Typography>
          <Divider /> */}
      {/* Implement file upload component here */}
      {/* </Stack> */}
    </Box>
  );
};
