/* eslint-disable @typescript-eslint/no-explicit-any */
import { isMaxDigitsValid, isTeleponValid } from "../../../utils/FormatForm";
import { jenisBadanUsahaOptions, jenisIdentitasOptions, jenisKelaminOptions, jenisWpOptionList, pekerjaanOptions } from "../../../utils/labelData";
import { Autocomplete, Box, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import UploadFotoPersilBoxBaru from "./UploadFotoPersilBoxBaru";

interface DataWPdanFotoBaruProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  deletedLinks: string[];
  setDeletedLinks: React.Dispatch<React.SetStateAction<string[]>>;
  nopBaru: string;
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
  wajibPajak: any;
  setSpopData: any;
  spopData: any;
  onValidityChange: (isValid: boolean) => void;
}

const DataWPdanFotoBaru: React.FC<DataWPdanFotoBaruProps> = ({
  nopBaru,
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
  onValidityChange,
  files,
  setFiles,
  deletedLinks,
  setDeletedLinks,
}) => {
  useEffect(() => {
    if (wajibPajak.jns_wp === "1") {
      const isValid =
        wajibPajak.no_identitas &&
        wajibPajak.jns_identitas &&
        wajibPajak.nm_wp &&
        wajibPajak.jns_kelamin_wp &&
        wajibPajak.alamat_wp &&
        wajibPajak.kd_provinsi &&
        wajibPajak.kd_kabupaten &&
        wajibPajak.kd_kecamatan &&
        wajibPajak.kd_kelurahan &&
        wajibPajak.pekerjaan_wp;
      onValidityChange(isValid);
    } else {
      const isValid =
        wajibPajak.no_identitas &&
        wajibPajak.jns_identitas &&
        wajibPajak.nm_wp &&
        wajibPajak.alamat_wp &&
        wajibPajak.kd_provinsi &&
        wajibPajak.kd_kabupaten &&
        wajibPajak.kd_kecamatan &&
        wajibPajak.kd_kelurahan &&
        wajibPajak.nm_penanggung_jawab &&
        wajibPajak.posisi_penanggung_jawab &&
        wajibPajak.alamat_wp &&
        wajibPajak.pekerjaan_wp;
      onValidityChange(isValid);
    }
  }, [onValidityChange, wajibPajak.jns_wp, wajibPajak]);
  return (
    <>
      <Box flex={1} minWidth="48%" mx={2}>
        <Typography variant="h6" gutterBottom sx={{ color: "red" }} mt={4}>
          Data Wajib Pajak
        </Typography>
        <Divider />

        <Box mt={2}>
          <Autocomplete
            fullWidth
            options={jenisWpOptionList}
            getOptionLabel={(option) => option.label}
            value={jenisWpOptionList.find((item) => item.key === wajibPajak.jns_wp) || null}
            onChange={(e, newValue) => {
              setWajibPajak({ ...wajibPajak, jns_wp: newValue?.key || "" });
            }}
            renderInput={(params) => <TextField required {...params} label="Jenis Wajib Pajak" fullWidth />}
          />
        </Box>

        {wajibPajak.jns_wp === "2" ? (
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
                renderInput={(params) => <TextField required {...params} label="No Identitas" />}
              />

              <Autocomplete
                fullWidth
                options={jenisBadanUsahaOptions}
                value={wajibPajak.jns_identitas || ""}
                onChange={(e, newValue) => {
                  setWajibPajak({ ...wajibPajak, ["jns_identitas"]: newValue });
                  if (newValue === "RANDOM") {
                    setRawInputWajibPajak(nopBaru);
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: nopBaru });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: "" });
                    setDisableNoIdentitas(true);
                  } else {
                    setDisableNoIdentitas(false);
                  }
                }}
                renderInput={(params) => <TextField required {...params} label="Jenis Badan Usaha" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField required fullWidth label={"Nama Wajib Pajak"} type={"text"} value={wajibPajak.nm_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_wp"]: e.target.value })} />
            </Box>

            <Box mt={2}>
              <TextField required fullWidth label={"Alamat"} type={"text"} value={wajibPajak.alamat_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["alamat_wp"]: e.target.value })} />
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
              <Autocomplete fullWidth options={provinsiOptions} value={wajibPajak.kd_provinsi || valueProvinsi} onChange={handleOnChangeKabupaten} renderInput={(params) => <TextField required {...params} label="Provinsi" />} />
              <Autocomplete fullWidth options={kabupatenOptionsFiltered} value={wajibPajak.kd_kabupaten || valueKabupaten} onChange={handleOnChangeKecamatan} renderInput={(params) => <TextField required {...params} label="Kabupaten" />} />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete fullWidth options={kecamatanOptionsFiltered} value={wajibPajak.kd_kecamatan || valueKecamatan} onChange={handleOnChangeKelurahan} renderInput={(params) => <TextField required {...params} label="Kecamatan" />} />
              <Autocomplete
                fullWidth
                options={kelurahanOptionsFiltered}
                value={wajibPajak.kd_kelurahan || valueKelurahan}
                onChange={(e, newValue) => {
                  setValueKelurahan(newValue);
                  setWajibPajak((prev: any) => ({ ...prev, kd_kelurahan: newValue || "" }));
                }}
                renderInput={(params) => <TextField required {...params} label="Kelurahan" />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField
                required
                fullWidth
                label={"Nama Penanggung Jawab"}
                name={"nm_penanggung_jawab"}
                value={wajibPajak.nm_penanggung_jawab || ""}
                onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_penanggung_jawab"]: e.target.value })}
              />
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
                required
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

              {spopData.nop && <UploadFotoPersilBoxBaru spopData={spopData} setSpopData={setSpopData} files={files} setFiles={setFiles} deletedLinks={deletedLinks} setDeletedLinks={setDeletedLinks} />}
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
                renderInput={(params) => <TextField required {...params} label="No Identitas" />}
              />

              <Autocomplete
                fullWidth
                freeSolo
                options={jenisIdentitasOptions}
                value={wajibPajak.jns_identitas || ""}
                onChange={(e, newValue) => {
                  setWajibPajak({ ...wajibPajak, ["jns_identitas"]: newValue });

                  if (newValue === "RANDOM") {
                    setRawInputWajibPajak(nopBaru);
                    setWajibPajak({ ...wajibPajak, ["no_identitas"]: nopBaru });
                    setWajibPajak({ ...wajibPajak, ["nm_wp"]: wajibPajak.nm_wp });
                    setWajibPajak({ ...wajibPajak, ["jns_identitas"]: newValue });
                    setDisableNoIdentitas(true);
                  } else {
                    setDisableNoIdentitas(false);
                  }
                }}
                renderInput={(params) => <TextField required {...params} label="Jenis Identitas" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField required fullWidth label={"Nama Wajib Pajak"} type={"text"} value={wajibPajak.nm_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["nm_wp"]: e.target.value })} />
              <Autocomplete
                fullWidth
                options={jenisKelaminOptions}
                value={wajibPajak.jns_kelamin_wp || ""}
                onChange={(e, newValue) => setWajibPajak({ ...wajibPajak, ["jns_kelamin_wp"]: newValue })}
                renderInput={(params) => <TextField required {...params} label="Jenis Kelamin" fullWidth />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth label={"Tempat Lahir"} name={"tempatLahir"} type={"text"} value={wajibPajak.tempat_lahir_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["tempat_lahir_wp"]: e.target.value })} />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs(wajibPajak.tanggal_lahir_wp) || null}
                  onChange={(newValue) => {
                    setWajibPajak({ ...wajibPajak, ["tanggal_lahir_wp"]: newValue });
                  }}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      error: false,
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>

            <Box mt={2}>
              <TextField required fullWidth label={"Alamat"} type={"text"} value={wajibPajak.alamat_wp || ""} onChange={(e) => setWajibPajak({ ...wajibPajak, ["alamat_wp"]: e.target.value })} />
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
              <Autocomplete fullWidth options={provinsiOptions} value={wajibPajak.kd_provinsi || valueProvinsi} onChange={handleOnChangeKabupaten} renderInput={(params) => <TextField required {...params} label="Provinsi" />} />
              <Autocomplete
                fullWidth
                options={kabupatenOptionsFiltered}
                value={valueKabupaten ?? wajibPajak.kd_kabupaten ?? null}
                onChange={handleOnChangeKecamatan}
                renderInput={(params) => <TextField required {...params} label="Kabupaten" />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete
                fullWidth
                options={kecamatanOptionsFiltered}
                value={valueKecamatan ?? wajibPajak.kd_kecamatan ?? null}
                onChange={handleOnChangeKelurahan}
                renderInput={(params) => <TextField required {...params} label="Kecamatan" />}
              />
              <Autocomplete
                fullWidth
                options={kelurahanOptionsFiltered}
                value={valueKelurahan ?? wajibPajak.kd_kelurahan ?? null}
                onChange={(e, newValue) => {
                  setValueKelurahan(newValue);
                  setWajibPajak(() => ({ ...wajibPajak, kd_kelurahan: newValue || "" }));
                }}
                renderInput={(params) => <TextField required {...params} label="Kelurahan" />}
              />
            </Box>

            <Box display="flex" gap={2} mt={2}>
              <Autocomplete
                fullWidth
                options={pekerjaanOptions}
                value={wajibPajak.pekerjaan_wp || ""}
                onChange={(e, newValue) => setWajibPajak({ ...wajibPajak, ["pekerjaan_wp"]: newValue })}
                renderInput={(params) => <TextField required {...params} label="Pekerjaan" fullWidth />}
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
              {spopData.nop && <UploadFotoPersilBoxBaru spopData={spopData} setSpopData={setSpopData} files={files} setFiles={setFiles} deletedLinks={deletedLinks} setDeletedLinks={setDeletedLinks} />}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default DataWPdanFotoBaru;
