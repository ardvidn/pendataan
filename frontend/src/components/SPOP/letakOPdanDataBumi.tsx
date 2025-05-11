/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { formatNoSertifikat, isMaxDigitsValid, isNoSertifikatValid } from "../../utils/FormatForm";
import { jenisAsalTanahOptions, jenisBumiOptions, jenisPeruntukanOptions, statusWpOptions } from "../../utils/labelData";
import { getKodeFromLabel, getLabelFromKode } from "../../utils/optionsHelper";
import { Autocomplete, Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useEffect } from "react";

interface LetakOPdanDataBumiProps {
  spopData: any;
  setSpopData: React.Dispatch<React.SetStateAction<string[]>>;
  handleAutocompleteChange: any;
  handleChange: any;
  handleDateChange: any;
  handleRadioChange: any;
  zntOptions: string[];
  showLahanKeterangan: boolean;
  onValidityChange: (isValid: boolean) => void;
}
const LetakOPdanDataBumi: React.FC<LetakOPdanDataBumiProps> = ({ spopData, setSpopData, zntOptions, showLahanKeterangan, onValidityChange }) => {
  useEffect(() => {
    const isValid = spopData.jalan_op && spopData.total_luas_bumi && spopData.kd_znt && spopData.jns_bumi && spopData.jns_peruntukan && spopData.jns_asaltanah && spopData.kd_status_wp && spopData.kd_status_cabang; // contoh field
    onValidityChange(isValid);
  }, [onValidityChange, spopData]);

  return (
    <>
      <Box flex={1} minWidth="48%" mx={2}>
        <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
          Data Letak Wajib Pajak
        </Typography>
        <Divider />

        <Box mt={2}>
          {/* <DateInput label="Tanggal Sertifikat" name="tanggalSertifikat" value={spopData.tgl_sertifikat || ""} onChange={handleDateChange} /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(spopData.tgl_sertifikat) || null}
              onChange={(newValue) => {
                setSpopData({ ...spopData, ["tgl_sertifikat"]: newValue });
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: false,
                },
              }}
            />
          </LocalizationProvider>
        </Box>

        <Box mt={2}>
          <TextField
            fullWidth
            label="No Sertifikat"
            value={formatNoSertifikat(spopData.no_sertifikat || "")}
            // onChange={(e) =>
            //   setSpopData((prev: any) => ({
            //     ...prev,
            //     no_sertifikat: e.target.value.replace(/\D/g, ""),
            //   }))
            // }
            onChange={(e) => setSpopData({ ...spopData, ["no_sertifikat"]: e.target.value.replace(/\D/g, "") })}
            error={!!spopData.no_sertifikat && !isNoSertifikatValid(spopData.no_sertifikat)}
            helperText={!!spopData.no_sertifikat && !isNoSertifikatValid(spopData.no_sertifikat) ? "Harus diisi lengkap (format: 11.11.11.11.1.11111)" : " "}
          />
        </Box>

        <Box mt={2}>
          <TextField required fullWidth label="Alamat" name="jalanOp" value={spopData.jalan_op || ""} onChange={(e) => setSpopData({ ...spopData, ["jalan_op"]: e.target.value })} />
        </Box>

        <Box mt={2}>
          <TextField fullWidth label="Dusun / Lingkungan" name="dusun" value={spopData.dusun_op || ""} onChange={(e) => setSpopData({ ...spopData, ["dusun_op"]: e.target.value })} />
        </Box>

        <Box mt={2}></Box>

        <Box display="flex" gap={2} mt={2}>
          <TextField fullWidth label="Blok / Kav / No" name="blok" value={spopData.blok_kav_no_op || ""} onChange={(e) => setSpopData({ ...spopData, ["blok_kav_no_op"]: e.target.value })} />
          <Box display="flex" gap={1}>
            <TextField
              fullWidth
              label="RT"
              name="rtOp"
              value={spopData.rt_op || ""}
              onChange={(e) => setSpopData({ ...spopData, ["rt_op"]: e.target.value })}
              error={!isMaxDigitsValid(spopData.rt_op)}
              helperText={!isMaxDigitsValid(spopData.rt_op) ? "Maksimal 3 digit angka" : " "}
            />
            <TextField
              fullWidth
              label="RW"
              name="rwOp"
              value={spopData.rw_op || ""}
              onChange={(e) => setSpopData({ ...spopData, ["rw_op"]: e.target.value })}
              error={!isMaxDigitsValid(spopData.rw_op)}
              helperText={!isMaxDigitsValid(spopData.rw_op) ? "Maksimal 3 digit angka" : " "}
            />
          </Box>
        </Box>

        <Box mt={2}>
          <Autocomplete
            options={statusWpOptions}
            value={spopData.kd_status_wp || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["kd_status_wp"]: newValue })}
            renderInput={(params) => <TextField required {...params} label="Status WP" fullWidth />}
          />
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <FormLabel required>Status Cabang</FormLabel>
            <RadioGroup row name="statusCabang" value={spopData.kd_status_cabang || ""} onChange={(e) => setSpopData({ ...spopData, ["kd_status_cabang"]: e.target.value })}>
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
          <TextField required fullWidth label="Luas Bumi" name="luasBumi" type="number" value={spopData.total_luas_bumi || ""} onChange={(e) => setSpopData({ ...spopData, ["kd_status_cabang"]: e.target.value })} />
          <Autocomplete
            fullWidth
            options={zntOptions}
            value={spopData.kd_znt || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["kd_znt"]: newValue })}
            renderInput={(params) => <TextField required {...params} label="ZNT" fullWidth />}
          />
        </Box>

        <Box display="flex" gap={2} mt={2}>
          <Autocomplete
            fullWidth
            options={jenisBumiOptions.map((item) => item.label)}
            value={getLabelFromKode(jenisBumiOptions, spopData.jns_bumi) || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["kd_status_wp"]: getKodeFromLabel(jenisBumiOptions, newValue || "") })}
            renderInput={(params) => <TextField required {...params} label="Jenis Bumi" fullWidth />}
          />

          <Autocomplete
            fullWidth
            options={jenisPeruntukanOptions}
            value={spopData.jns_peruntukan || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["jns_peruntukan"]: newValue })}
            renderInput={(params) => <TextField required {...params} label="Jenis Peruntukan" fullWidth />}
          />
        </Box>

        <Box mt={2}>
          <Autocomplete
            options={jenisAsalTanahOptions}
            value={spopData.jns_asaltanah || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["jns_asaltanah"]: newValue })}
            renderInput={(params) => <TextField required {...params} label="Jenis Asal Tanah" fullWidth />}
          />
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <FormLabel>Lahan Produksi Pangan dan Ternak</FormLabel>
            <RadioGroup row name="lahanProduksiPangan" value={spopData.is_pangan_ternak || "Tidak Benar"} onChange={(e) => setSpopData({ ...spopData, ["is_pangan_ternak"]: e.target.value })}>
              <FormControlLabel value="Benar" control={<Radio />} label="Benar" sx={{ color: "#000" }} />
              <FormControlLabel value="Tidak Benar" control={<Radio />} label="Tidak Benar" sx={{ color: "#000" }} />
            </RadioGroup>
          </FormControl>
        </Box>

        {showLahanKeterangan && (
          <Box mt={2}>
            <TextField
              fullWidth
              label="Keterangan Lahan Produksi Pangan dan Ternak"
              name="keteranganLahanProduksi"
              value={spopData.ket_pangan_ternak || ""}
              onChange={(e) => setSpopData({ ...spopData, ["ket_pangan_ternak"]: e.target.value })}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default LetakOPdanDataBumi;
