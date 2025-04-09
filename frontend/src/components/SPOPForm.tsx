"use client";
import { useState, useEffect } from "react";
import { Box, TextField, Autocomplete, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Divider, Typography } from "@mui/material";
import UploadFotoPersilBox from "./uploadImage";

interface SpopFormProps {
  nop: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SPOPForm = ({ nop, setSpopData, spopData, loading }: { nop: SpopFormProps; setSpopData: React.Dispatch<React.SetStateAction<string>>; spopData: any; loading: any }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [showLahanKeterangan, setShowLahanKeterangan] = useState(false);

  // Mock data for autocomplete options
  const statusWpOptions = ["Pribadi", "Badan", "Pemerintah"];
  const jenisBumiOptions = ["Tanah Kosong", "Tanah Bangunan", "Tanah Pertanian"];
  const zntOptions = ["ZNT 1", "ZNT 2", "ZNT 3"];
  const jenisAsalTanahOptions = ["Hak Milik", "Hak Guna Bangunan", "Hak Pakai"];
  const jenisWpOptions = ["Pribadi", "Badan", "Pemerintah"];
  const jenisIdentitasOptions = ["KTP", "SIM", "Passport"];
  const jenisKelaminOptions = ["Laki-laki", "Perempuan"];
  const provinsiOptions = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];
  const pekerjaanOptions = ["PNS", "Swasta", "Wiraswasta"];
  const jenisPeruntukanOptions = ["Non Komersil", "Komersil"];

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

  const handleDateChange = (name: string, value: Date | null) => {
    setSpopData({ ...spopData, [name]: value });
  };

  const handleAutocompleteChange = (name: string, value: any) => {
    setSpopData({ ...spopData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpopData({ ...spopData, [name]: value });

    if (name === "lahanProduksiPangan" && value === "Benar") {
      setShowLahanKeterangan(true);
    } else if (name === "lahanProduksiPangan" && value === "Tidak Benar") {
      setShowLahanKeterangan(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DateInput = ({ label, name, value, onChange }: any) => <TextField fullWidth label={label} name={name} type="date" value={value || ""} onChange={onChange} InputLabelProps={{ shrink: true }} />;

  if (loading) return <Typography>Loading...</Typography>;
  if (!spopData) return <Typography>Data tidak ditemukan</Typography>;

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        {/* Kiri - Letak WP dan Data Bumi */}
        <Box flex={1} minWidth="48%" mx={2}>
          <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
            Data Letak Wajib Pajak
          </Typography>
          <Divider />

          <Box mt={2}>
            <DateInput label="Tanggal Sertifikat" name="tanggalSertifikat" value={spopData.tanggalSertifikat} onChange={handleChange} />
          </Box>

          <Box mt={2}>
            <TextField fullWidth label="No Sertifikat" name="noSertifikat" value={spopData.noSertifikat || ""} onChange={handleChange} />
          </Box>

          <Box mt={2}>
            <TextField fullWidth label="Alamat" name="alamat" value={spopData.alamat || ""} onChange={handleChange} />
          </Box>

          <Box mt={2}>
            <TextField fullWidth label="Dusun / Lingkungan" name="dusun" value={spopData.dusun || ""} onChange={handleChange} />
          </Box>

          <Box mt={2}></Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label="Blok / Kav / No" name="blok" value={spopData.blok || ""} onChange={handleChange} />
            <Box display="flex" gap={1}>
              <TextField fullWidth label="RT" name="rt" value={spopData.rt || ""} onChange={handleChange} />
              <TextField fullWidth label="RW" name="rw" value={spopData.rw || ""} onChange={handleChange} />
            </Box>
          </Box>

          <Box mt={2}>
            <Autocomplete
              options={statusWpOptions}
              value={spopData.statusWp || ""}
              onChange={(e, newValue) => handleAutocompleteChange("statusWp", newValue)}
              renderInput={(params) => <TextField {...params} label="Status WP" fullWidth />}
            />
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <FormLabel>Status Cabang</FormLabel>
              <RadioGroup row name="statusCabang" value={spopData.statusCabang || "Bukan Cabang"} onChange={handleRadioChange}>
                <FormControlLabel value="Cabang" control={<Radio />} label="Cabang" sx={{ color: "#000" }} />
                <FormControlLabel value="Bukan Cabang" control={<Radio />} label="Bukan Cabang" sx={{ color: "#000" }} />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Data Bumi */}
          <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
            Data Bumi
          </Typography>
          <Divider />

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label="Luas Bumi" name="luasBumi" type="number" value={spopData.luasBumi || ""} onChange={handleChange} />
            <Autocomplete fullWidth options={zntOptions} value={spopData.znt || ""} onChange={(e, newValue) => handleAutocompleteChange("znt", newValue)} renderInput={(params) => <TextField {...params} label="ZNT" fullWidth />} />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={jenisBumiOptions}
              value={spopData.jenisBumi || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisBumi", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Bumi" fullWidth />}
            />

            <Autocomplete
              fullWidth
              options={jenisPeruntukanOptions}
              value={spopData.jenisPeruntukan || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisPeruntukan", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Peruntukan" fullWidth />}
            />
          </Box>

          {/* <Box mt={2}>
            <FormControl fullWidth>
              <FormLabel>Jenis Peruntukan</FormLabel>
              <RadioGroup row name="jenisPeruntukan" value={spopData.jenisPeruntukan || "Non Komersil"} onChange={handleRadioChange}>
                <FormControlLabel value="Komersil" control={<Radio />} label="Komersil" />
                <FormControlLabel value="Non Komersil" control={<Radio />} label="Non Komersil" />
              </RadioGroup>
            </FormControl>
          </Box> */}

          <Box mt={2}>
            <Autocomplete
              options={jenisAsalTanahOptions}
              value={spopData.jenisAsalTanah || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisAsalTanah", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Asal Tanah" fullWidth />}
            />
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <FormLabel>Lahan Produksi Pangan dan Ternak</FormLabel>
              <RadioGroup row name="lahanProduksiPangan" value={spopData.lahanProduksiPangan || "Tidak Benar"} onChange={handleRadioChange}>
                <FormControlLabel value="Benar" control={<Radio />} label="Benar" sx={{ color: "#000" }} />
                <FormControlLabel value="Tidak Benar" control={<Radio />} label="Tidak Benar" sx={{ color: "#000" }} />
              </RadioGroup>
            </FormControl>
          </Box>

          {showLahanKeterangan && (
            <Box mt={2}>
              <TextField fullWidth label="Keterangan Lahan Produksi Pangan dan Ternak" name="keteranganLahanProduksi" value={spopData.keteranganLahanProduksi || ""} onChange={handleChange} />
            </Box>
          )}
        </Box>

        {/* Kanan - Data WP dan Foto */}
        <Box flex={1} minWidth="48%" mx={2}>
          <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
            Data Wajib Pajak
          </Typography>
          <Divider />

          <Box mt={2}>
            <Autocomplete
              options={jenisWpOptions}
              value={spopData.jenisWp || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisWp", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Wajib Pajak" fullWidth />}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label={"No Identitas"} name={"noIdentitas"} type={"text"} value={spopData["noIdentitas"] || ""} onChange={handleChange} />

            <Autocomplete
              fullWidth
              options={jenisIdentitasOptions}
              value={spopData.jenisIdentitas || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisIdentitas", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Identitas" fullWidth />}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label={"Nama Wajib Pajak"} name={"namaWp"} type={"text"} value={spopData["namaWp"] || ""} onChange={handleChange} />
            <Autocomplete
              fullWidth
              options={jenisKelaminOptions}
              value={spopData.jenisKelamin || ""}
              onChange={(e, newValue) => handleAutocompleteChange("jenisKelamin", newValue)}
              renderInput={(params) => <TextField {...params} label="Jenis Kelamin" fullWidth />}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label={"Tempat Lahir"} name={"tempatLahir"} type={"text"} value={spopData["tempatLahir"] || ""} onChange={handleChange} />
            <DateInput label="Tanggal Lahir" value={spopData.tanggalLahir || null} onChange={(newValue) => handleDateChange("tanggalLahir", newValue)} renderInput={(params) => <TextField fullWidth {...params} />} />
          </Box>

          <Box mt={2}>
            <TextField fullWidth label={"Alamat"} name={"alamatWp"} type={"text"} value={spopData["alamatWp"] || ""} onChange={handleChange} />
          </Box>
          <Box mt={2}>
            <TextField fullWidth label={"Dusun/Lingkungan"} name={"dusunWp"} type={"text"} value={spopData["dusunWp"] || ""} onChange={handleChange} />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label={"Blok/Kav/No"} name={"namaWp"} type={"text"} value={spopData["namaWp"] || ""} onChange={handleChange} />
            <Box display="flex" gap={1}>
              <TextField fullWidth label={"RT"} name={"namaWp"} type={"text"} value={spopData["namaWp"] || ""} onChange={handleChange} />
              <TextField fullWidth label={"RW"} name={"namaWp"} type={"text"} value={spopData["namaWp"] || ""} onChange={handleChange} />
            </Box>
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={provinsiOptions}
              value={spopData.provinsi || ""}
              onChange={(e, newValue) => handleAutocompleteChange("provinsi", newValue)}
              renderInput={(params) => <TextField {...params} label="Provinsi" fullWidth />}
            />
            <Autocomplete
              fullWidth
              options={provinsiOptions}
              value={spopData.kabupaten || ""}
              onChange={(e, newValue) => handleAutocompleteChange("kabupaten", newValue)}
              renderInput={(params) => <TextField {...params} label="kabupaten" fullWidth />}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={provinsiOptions}
              value={spopData.kecamatan || ""}
              onChange={(e, newValue) => handleAutocompleteChange("kecamatan", newValue)}
              renderInput={(params) => <TextField {...params} label="kecamatan" fullWidth />}
            />
            <Autocomplete
              fullWidth
              options={provinsiOptions}
              value={spopData.kelurahan || ""}
              onChange={(e, newValue) => handleAutocompleteChange("kelurahan", newValue)}
              renderInput={(params) => <TextField {...params} label="kelurahan" fullWidth />}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <Autocomplete
              fullWidth
              options={pekerjaanOptions}
              value={spopData.pekerjaan || ""}
              onChange={(e, newValue) => handleAutocompleteChange("pekerjaan", newValue)}
              renderInput={(params) => <TextField {...params} label="Pekerjaan" fullWidth />}
            />
            <TextField fullWidth label={"Telepon"} name={"telepon"} type={"text"} value={spopData["telepon"] || ""} onChange={handleChange} />
          </Box>

          <Box display="flex" gap={2} mt={2}>
            <TextField fullWidth label="Email" name="email" value={spopData.email || ""} onChange={handleChange} />
            <TextField fullWidth label="NPWP" name="npwp" value={spopData.npwp || ""} onChange={handleChange} />
          </Box>

          {/* Foto Upload */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
              Foto Objek Pajak
            </Typography>
            <Divider />
            <UploadFotoPersilBox />
          </Box>
        </Box>
      </Box>
    </>
  );
};
