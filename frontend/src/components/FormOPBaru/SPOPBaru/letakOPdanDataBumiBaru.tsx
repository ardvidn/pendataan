/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { formatNoSertifikat, isNoSertifikatValid } from "../../../utils/FormatForm";
import { jenisAsalTanahOptions, jenisBumiOptions, jenisPajak, jenisPeruntukanOptions, statusWpOptions } from "../../../utils/labelData";
import { createOptionsFromArray, getKodeFromLabel, getLabelFromKode } from "../../../utils/optionsHelper";
import { Autocomplete, Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface LetakOPdanDataBumiBaruProps {
  spopData: any;
  setSpopData: React.Dispatch<React.SetStateAction<string[]>>;
  handleRadioChange: any;
  zntOptions: string[];
  showLahanKeterangan: boolean;
  onValidityChangeB: (isValid: boolean) => void;
}
const LetakOPdanDataBumiBaru: React.FC<LetakOPdanDataBumiBaruProps> = ({ spopData, setSpopData, zntOptions, showLahanKeterangan, onValidityChangeB }) => {
  useEffect(() => {
    const isValid = spopData.jalan_op && spopData.total_luas_bumi && spopData.kd_znt && spopData.jns_bumi && spopData.jns_peruntukan && spopData.jns_asaltanah && spopData.kd_status_wp;

    onValidityChangeB(isValid);
  }, [spopData, onValidityChangeB]);

  return (
    <>
      <Box flex={1} minWidth="48%" mx={2}>
        <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
          Data Letak Objek Pajak
        </Typography>
        <Divider />
        <Box mt={2}>
          <Autocomplete
            fullWidth
            multiple
            id="checkboxes-tags-demo"
            options={jenisPajak}
            disableCloseOnSelect
            getOptionLabel={(option) => option.jenispajak}
            value={spopData.jenis_pajak?.map((item: any) => ({ jenispajak: item })) || []}
            onChange={(e, newValue) => {
              const selectedValues = newValue.map((item) => item.jenispajak);
              setSpopData({ ...spopData, jenis_pajak: selectedValues });
            }}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                  {option.jenispajak}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} label="Jenis Pajak" placeholder="Jenis Pajak..." />}
          />
        </Box>

        <Box mt={2}>
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
            <TextField fullWidth label="RT" name="rtOp" value={spopData.rt_op || ""} onChange={(e) => setSpopData({ ...spopData, ["rt_op"]: e.target.value })} />
            <TextField fullWidth label="RW" name="rwOp" value={spopData.rw_op || ""} onChange={(e) => setSpopData({ ...spopData, ["rw_op"]: e.target.value })} />
          </Box>
        </Box>

        <Box mt={2}>
          <Autocomplete
            options={statusWpOptions}
            value={getLabelFromKode(createOptionsFromArray(statusWpOptions), spopData.kd_status_wp) || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["kd_status_wp"]: getKodeFromLabel(createOptionsFromArray(statusWpOptions), newValue || "") })}
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
          <TextField required fullWidth label="Luas Bumi" name="luasBumi" type="number" value={spopData.total_luas_bumi || ""} onChange={(e) => setSpopData({ ...spopData, ["total_luas_bumi"]: e.target.value })} />
          <Autocomplete
            fullWidth
            options={zntOptions}
            value={spopData.kd_znt || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["kd_znt"]: newValue.split(" - ")[0] })}
            renderInput={(params) => <TextField required {...params} label="ZNT" fullWidth />}
          />
        </Box>

        <Box display="flex" gap={2} mt={2}>
          <Autocomplete
            fullWidth
            options={jenisBumiOptions.map((item) => item.label)}
            value={getLabelFromKode(jenisBumiOptions, spopData.jns_bumi) || ""}
            onChange={(e, newValue) => setSpopData({ ...spopData, ["jns_bumi"]: getKodeFromLabel(jenisBumiOptions, newValue || "") })}
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

export default LetakOPdanDataBumiBaru;
