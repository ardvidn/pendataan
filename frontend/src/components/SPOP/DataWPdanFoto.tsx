/* eslint-disable @typescript-eslint/no-explicit-any */
import { isMaxDigitsValid, isTeleponValid } from "../../utils/FormatForm";
import { jenisBadanUsahaOptions, jenisIdentitasOptions, jenisKelaminOptions, jenisWpOptions, pekerjaanOptions } from "../../utils/labelData";
import { Autocomplete, Box, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import UploadFotoPersilBox from "../uploadImage";
import { getValueByKey } from "../../utils/optionsHelper";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface DataWPdanFotoProps {
  nop: string;
  setWajibPajak: React.Dispatch<React.SetStateAction<string[]>>;
  loadingWajibPajak: boolean;
  wajibPajakOptions: any[];
  provinsiOptions: string[];
  setRawInputWajibPajak: React.Dispatch<React.SetStateAction<string>>;
  rawInputWajibPajak: string;
  disableNoIdentitas: boolean;
  setDisableNoIdentitas: React.Dispatch<React.SetStateAction<boolean>>;
  setValueKelurahan: React.Dispatch<React.SetStateAction<string | null>>;
  valueProvinsi: string | null;
  valueKabupaten: string | null;
  valueKecamatan: string | null;
  valueKelurahan: string | null;
  kabupatenOptionsFiltered: string[];
  kecamatanOptionsFiltered: string[];
  kelurahanOptionsFiltered: string[];
  handleOnChangeKabupaten: any;
  handleOnChangeKecamatan: any;
  handleOnChangeKelurahan: any;
  handleAutocompleteChange: any;
  handleNestedChange: any;
  handleChange: any;
  handleDateChange: any;
  wajibPajak: any;
  setSpopData: any;
  spopData: any;
}

const DataWPdanFoto: React.FC<DataWPdanFotoProps> = ({
  nop,
  setWajibPajak,
  loadingWajibPajak,
  wajibPajakOptions,
  provinsiOptions,
  setRawInputWajibPajak,
  rawInputWajibPajak,
  disableNoIdentitas,
  setDisableNoIdentitas,
  setValueKelurahan,
  valueProvinsi,
  valueKabupaten,
  valueKecamatan,
  valueKelurahan,
  kabupatenOptionsFiltered,
  kecamatanOptionsFiltered,
  kelurahanOptionsFiltered,
  handleOnChangeKabupaten,
  handleOnChangeKecamatan,
  handleOnChangeKelurahan,
  wajibPajak,
  setSpopData,
  spopData,
}) => {
  return (
    <>
      <Box flex={1} minWidth="48%" mx={2}>
        <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
          Data Wajib Pajak
        </Typography>
        <Divider />

        <Box mt={2}>
          <Autocomplete
            options={Object.values(jenisWpOptions)}
            value={getValueByKey(jenisWpOptions, wajibPajak.jns_wp) || ""}
            onChange={(e, value) => setWajibPajak({ ...wajibPajak, ["jns_wp"]: value })}
            renderInput={(params) => <TextField {...params} label="Jenis Wajib Pajak" fullWidth />}
          />
        </Box>

        {wajibPajak.jns_wp === "BADAN USAHA" ? (
          <>
            <Box display="flex" gap={2} mt={2}>
              <Autocomplete
                freeSolo
                fullWidth
                loading={loadingWajibPajak}
                options={wajibPajakOptions}
                disabled={disableNoIdentitas}
                getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                value={wajibPajak.no_identitas && wajibPajak.nm_wp ? `${wajibPajak.no_identitas} - ${wajibPajak.nm_wp}` : rawInputWajibPajak}
                onInputChange={(e, newInputValue) => {
                  const numericOnly = newInputValue.replace(/\D/g, "").slice(0, 20);
                  setRawInputWajibPajak(numericOnly);
                  setWajibPajak({ ...wajibPajak, ["no_identitas"]: numericOnly });
                  // handleChange("subjekPajak", "nmWp", ""); // reset nama saat mengetik
                }}
                onChange={(e, newValue) => {
                  if (typeof newValue === "string") {
                    const numericOnly = newValue.replace(/\D/g, "").slice(0, 20);
                    // handleChange("no_identitas", numericOnly);
                    // handleChange("nm_wp", "");
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: numericOnly });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setRawInputWajibPajak(numericOnly);
                  } else if (newValue?.value && newValue.value !== "not_found") {
                    // handleChange("no_identitas", newValue.value);
                    // handleChange("nm_wp", newValue.namaWajibPajak || "");
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: newValue.value });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: newValue.nm_wp || "" });
                    setRawInputWajibPajak(`${newValue.value} - ${newValue.nm_wp}`);
                  } else {
                    // handleChange("no_identitas", "");
                    // handleChange("nm_wp", "");
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: "" });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setRawInputWajibPajak("");
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="No Identitas"
                    //   error={rawInputWajibPajak !== "" && rawInputwajibPajak.replace(/\D/g, "").length !== 20}
                    //   helperText={rawInputWajibPajak !== "" && rawInputwajibPajak.replace(/\D/g, "").length !== 20 ? "Harus 16 digit angka" : " "}
                    //   inputProps={{
                    //     ...params.inputProps,
                    //     maxLength: 20,
                    //   }}
                  />
                )}
              />

              <Autocomplete
                fullWidth
                options={jenisBadanUsahaOptions}
                value={wajibPajak.jns_identitas || ""}
                onChange={(e, newValue) => {
                  // handleAutocompleteChange("jns_identitas", newValue);
                  setWajibPajak({ ...wajibPajak, ["jns_identitas"]: newValue });
                  if (newValue === "RANDOM") {
                    setRawInputWajibPajak(nop);
                    // handleChange("no_identitas", nop);
                    // handleChange("nm_wp", "");
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: nop });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setDisableNoIdentitas(true);
                    // setDisableNpwp(true);
                  } else {
                    setDisableNoIdentitas(false);
                    // setDisableNpwp(false);
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Jenis Badan Usaha" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Nama Wajib Pajak"} type={"text"} value={wajibPajak.nm_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_wp"]: e.target.value })} />
            </Box>

            <Box mt={2}>
              <TextField fullWidth label={"Alamat"} type={"text"} value={wajibPajak.alamat_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["alamat_wp"]: e.target.value })} />
            </Box>
            <Box mt={2}>
              <TextField fullWidth label={"Dusun/Lingkungan"} name={"dusun_wp"} type={"text"} value={wajibPajak.dusun_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["dusun_wp"]: e.target.value })} />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Blok/Kav/No"} type={"text"} value={wajibPajak.blok_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["blok_wp"]: e.target.value })} />
              <Box display="flex" gap={1}>
                <TextField
                  fullWidth
                  label="RT"
                  value={wajibPajak.rt_wp || ""}
                  onChange={(e) => setWajibPajak({ ...wajibPajak, ["rt_wp"]: e.target.value.replace(/\D/g, "") })}
                  error={!isMaxDigitsValid(wajibPajak.rt_wp)}
                  helperText={!isMaxDigitsValid(wajibPajak.rt_wp) ? "Maksimal 3 digit angka" : " "}
                />
                <TextField
                  fullWidth
                  label="RW"
                  value={wajibPajak.rw_wp || ""}
                  onChange={(e) => setWajibPajak({ ...wajibPajak, ["rw_wp"]: e.target.value.replace(/\D/g, "") })}
                  error={!isMaxDigitsValid(wajibPajak.rw_wp)}
                  helperText={!isMaxDigitsValid(wajibPajak.rw_wp) ? "Maksimal 3 digit angka" : " "}
                />
              </Box>
            </Box>

            <Box display="flex" gap={2}>
              <Autocomplete fullWidth options={provinsiOptions} value={wajibPajak.kd_provinsi || valueProvinsi} onChange={handleOnChangeKabupaten} renderInput={(params) => <TextField {...params} label="Provinsi" />} />
              <Autocomplete fullWidth options={kabupatenOptionsFiltered} value={wajibPajak.kd_kabupaten || valueKabupaten} onChange={handleOnChangeKecamatan} renderInput={(params) => <TextField {...params} label="Kabupaten" />} />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete fullWidth options={kecamatanOptionsFiltered} value={wajibPajak.kd_kecamatan || valueKecamatan} onChange={handleOnChangeKelurahan} renderInput={(params) => <TextField {...params} label="Kecamatan" />} />
              <Autocomplete
                fullWidth
                options={kelurahanOptionsFiltered}
                value={wajibPajak.kd_kelurahan || valueKelurahan}
                onChange={(e, newValue) => {
                  setValueKelurahan(newValue);
                  setWajibPajak((prev: any) => ({ ...prev, kd_kelurahan: newValue || "" }));
                }}
                renderInput={(params) => <TextField {...params} label="Kelurahan" />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Nama Penanggung Jawab"} name={"nm_penanggung_jawab"} value={wajibPajak.nm_penanggung_jawab || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_penanggung_jawab"]: e.target.value })} />
              <TextField
                fullWidth
                label={"Telepon"}
                name={"telp_wp"}
                type={"number"}
                value={wajibPajak.telp_wp || ""}
                onChange={(e) => setWajibPajak({ ...wajibPajak, ["telp_wp"]: e.target.value })}
                error={!isTeleponValid(wajibPajak.telp_wp)}
                helperText={!isTeleponValid(wajibPajak.telp_wp) ? "Maksimal 16 digit angka" : " "}
                inputProps={{ maxLength: 16 }}
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label={"Posisi Penanggung Jawab"}
                name={"posisi_penanggung_jawab"}
                type={"text"}
                value={wajibPajak.posisi_penanggung_jawab || ""}
                onChange={(e) => setWajibPajak({ ...wajibPajak, ["posisi_penanggung_jawab"]: e.target.value })}
              />
              <TextField fullWidth label="NPWP" name="npwp" value={wajibPajak.npwp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["npwp"]: e.target.value })} />
            </Box>

            {/* Foto Upload */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                Foto Objek Pajak
              </Typography>
              <Divider />
              <UploadFotoPersilBox spopData={spopData} setSpopData={setSpopData} />
            </Box>
          </>
        ) : (
          <>
            <Box display="flex" gap={2} mt={2}>
              <Autocomplete
                freeSolo
                fullWidth
                loading={loadingWajibPajak}
                options={wajibPajakOptions}
                disabled={disableNoIdentitas}
                getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                value={wajibPajak.no_identitas && wajibPajak.nm_wp ? `${wajibPajak.no_identitas} - ${wajibPajak.nm_wp}` : rawInputWajibPajak}
                onInputChange={(e, newInputValue) => {
                  const numericOnly = newInputValue.replace(/\D/g, "").slice(0, 20);
                  setRawInputWajibPajak(numericOnly);
                  setWajibPajak({ ...wajibPajak, ["no_identitas"]: numericOnly });
                  // handleNestedChange("subjekPajak", "nmWp", ""); // reset nama saat mengetik
                }}
                onChange={(e, newValue) => {
                  if (typeof newValue === "string") {
                    const numericOnly = newValue.replace(/\D/g, "").slice(0, 20);
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: numericOnly });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setRawInputWajibPajak(numericOnly);
                  } else if (newValue?.value && newValue.value !== "not_found") {
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: newValue.value });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: newValue.nm_wp || "" });
                    setRawInputWajibPajak(`${newValue.value} - ${newValue.nm_wp}`);
                  } else {
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: "" });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setRawInputWajibPajak("");
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="No Identitas"
                    //   error={rawInputWajibPajak !== "" && rawInputwajibPajak.replace(/\D/g, "").length !== 20}
                    //   helperText={rawInputWajibPajak !== "" && rawInputwajibPajak.replace(/\D/g, "").length !== 20 ? "Harus 16 digit angka" : " "}
                    //   inputProps={{
                    //     ...params.inputProps,
                    //     maxLength: 20,
                    //   }}
                  />
                )}
              />

              <Autocomplete
                fullWidth
                options={jenisIdentitasOptions}
                value={wajibPajak.jns_identitas || ""}
                onChange={(e, newValue) => {
                  setWajibPajak({ ...wajibPajak, ["jns_identitas"]: newValue });

                  if (newValue === "RANDOM") {
                    setRawInputWajibPajak(nop);
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: nop });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setDisableNoIdentitas(true);
                  } else {
                    setDisableNoIdentitas(false);
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Jenis Identitas" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Nama Wajib Pajak"} type={"text"} value={wajibPajak.nm_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_wp"]: e.target.value })} />
              <Autocomplete
                fullWidth
                options={jenisKelaminOptions}
                value={wajibPajak.jns_kelamin_wp || ""}
                onChange={(e, newValue) => setWajibPajak({ ...wajibPajak, ["jns_kelamin_wp"]: newValue })}
                renderInput={(params) => <TextField {...params} label="Jenis Kelamin" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Tempat Lahir"} name={"tempatLahir"} type={"text"} value={wajibPajak.tempat_lahir_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["tempat_lahir_wp"]: e.target.value })} />

              {/* <DateInput label="Tanggal Lahir" name="tanggalLahir" value={wajibPajak.tanggal_lahir_wp || ""} onChange={ (e) =>
                setWajibPajak({ ...wajibPajak, ["tanggal_lahir_wp"]: e.target.value})
              } /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs(wajibPajak.tanggal_lahir_wp) || null}
                  onChange={(newValue) => {
                    setWajibPajak({ ...wajibPajak, ["tanggal_lahir_wp"]: newValue });
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
              <TextField fullWidth label={"Alamat"} type={"text"} value={wajibPajak.alamat_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["alamat_wp"]: e.target.value })} />
            </Box>
            <Box mt={2}>
              <TextField fullWidth label={"Dusun/Lingkungan"} name={"dusunWp"} type={"text"} value={wajibPajak.dusun_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["dusun_wp"]: e.target.value })} />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Blok/Kav/No"} type={"text"} value={wajibPajak.blok_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["blok_wp"]: e.target.value })} />
              <Box display="flex" gap={1}>
                <TextField
                  fullWidth
                  label="RT"
                  value={wajibPajak.rt_wp || ""}
                  onChange={(e) => setWajibPajak({ ...wajibPajak, ["rt_wp"]: e.target.value.replace(/\D/g, "") })}
                  error={!isMaxDigitsValid(wajibPajak.rt_wp)}
                  helperText={!isMaxDigitsValid(wajibPajak.rt_wp) ? "Maksimal 3 digit angka" : " "}
                />
                <TextField
                  fullWidth
                  label="RW"
                  value={wajibPajak.rw_wp || ""}
                  onChange={(e) => setWajibPajak({ ...wajibPajak, ["rw_wp"]: e.target.value.replace(/\D/g, "") })}
                  error={!isMaxDigitsValid(wajibPajak.rw_wp)}
                  helperText={!isMaxDigitsValid(wajibPajak.rw_wp) ? "Maksimal 3 digit angka" : " "}
                />
              </Box>
            </Box>

            <Box display="flex" gap={2}>
              <Autocomplete fullWidth options={provinsiOptions} value={wajibPajak.kd_provinsi || valueProvinsi} onChange={handleOnChangeKabupaten} renderInput={(params) => <TextField {...params} label="Provinsi" />} />
              <Autocomplete fullWidth options={kabupatenOptionsFiltered} value={valueKabupaten ?? wajibPajak.kd_kabupaten ?? null} onChange={handleOnChangeKecamatan} renderInput={(params) => <TextField {...params} label="Kabupaten" />} />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete fullWidth options={kecamatanOptionsFiltered} value={valueKecamatan ?? wajibPajak.kd_kecamatan ?? null} onChange={handleOnChangeKelurahan} renderInput={(params) => <TextField {...params} label="Kecamatan" />} />
              <Autocomplete
                fullWidth
                options={kelurahanOptionsFiltered}
                value={valueKelurahan ?? wajibPajak.kd_kelurahan ?? null}
                onChange={(e, newValue) => {
                  setValueKelurahan(newValue);
                  setWajibPajak(() => ({ ...wajibPajak, kd_kelurahan: newValue || "" }));
                }}
                renderInput={(params) => <TextField {...params} label="Kelurahan" />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete
                fullWidth
                options={pekerjaanOptions}
                value={wajibPajak.pekerjaan_wp || ""}
                onChange={(e, newValue) => setWajibPajak({ ...wajibPajak, ["pekerjaan_wp"]: newValue })}
                renderInput={(params) => <TextField {...params} label="Pekerjaan" fullWidth />}
              />
              <TextField
                fullWidth
                label={"Telepon"}
                name={"telepon"}
                type={"number"}
                value={wajibPajak.telp_wp || ""}
                onChange={(e) => setWajibPajak({ ...wajibPajak, ["telp_wp"]: e.target.value })}
                error={!isTeleponValid(wajibPajak.telp_wp)}
                helperText={!isTeleponValid(wajibPajak.telp_wp) ? "Maksimal 16 digit angka" : " "}
                inputProps={{ maxLength: 16 }}
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField fullWidth label="Email" name="email" value={wajibPajak.email_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["email_wp"]: e.target.value })} />
              <TextField fullWidth label="NPWP" name="npwp" value={wajibPajak.npwp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["npwp"]: e.target.value })} />
            </Box>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                Foto Objek Pajak
              </Typography>
              <Divider />
              <UploadFotoPersilBox spopData={spopData} setSpopData={setSpopData} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default DataWPdanFoto;
