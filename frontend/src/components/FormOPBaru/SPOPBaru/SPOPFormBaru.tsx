/* eslint-disable @typescript-eslint/no-explicit-any */

import { Autocomplete, TextField, Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosError from "axios";
import LetakOPdanDataBumiBaru from "./letakOPdanDataBumiBaru";
import { ApiResponse, Kabupaten, Kecamatan, Kelurahan, Provinsi, WajibPajak, ZNT } from "@/utils/interface";
import { formatRibuan } from "@/utils/FormatForm";
import DataWPdanFotoBaru from "./DatWPdanFotoBaru";
import { formatNop } from "@/utils/formatNOP";

const fixedProvinsi = "62";
const fixedKabupaten = "13";

interface SPOPFormBaruProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  deletedLinks: string[];
  setDeletedLinks: React.Dispatch<React.SetStateAction<string[]>>;
  isFromEdit?: boolean;
  nop?: string;
  spopData: any;
  setSpopData: React.Dispatch<React.SetStateAction<string[]>>;
  wajibPajak: any;
  setWajibPajak: React.Dispatch<React.SetStateAction<any>>;
  nopBaru: string;
  setKdKecBaru: React.Dispatch<React.SetStateAction<any>>;
  setKdKelBaru: React.Dispatch<React.SetStateAction<any>>;
  setKdBlokBaru: React.Dispatch<React.SetStateAction<any>>;
  kdKecBaru: string;
  kdKellBaru: string;
  kdBlokBaru: string;
  onValidityChangeB: (isValid: boolean) => void;
  onValidityChange: (isValid: boolean) => void;
  isLoading: boolean;
  setSelectedKecamatanBaru: React.Dispatch<React.SetStateAction<any>>;
  setSelectedKelurahanBaru: React.Dispatch<React.SetStateAction<any>>;
  setSelectedBlokBaru: React.Dispatch<React.SetStateAction<any>>;
  selectedKecamatanBaru: any;
  selectedKelurahanBaru: any;
  selectedBlokBaru: any;
}

const SPOPFormBaru: React.FC<SPOPFormBaruProps> = ({
  isFromEdit,
  nop,
  spopData,
  setSpopData,
  nopBaru,
  setKdKecBaru,
  setKdKelBaru,
  setKdBlokBaru,
  onValidityChange,
  onValidityChangeB,
  wajibPajak,
  setWajibPajak,
  isLoading,
  setSelectedKecamatanBaru,
  setSelectedKelurahanBaru,
  setSelectedBlokBaru,
  selectedKecamatanBaru,
  selectedKelurahanBaru,
  selectedBlokBaru,
  files,
  setFiles,
  deletedLinks,
  setDeletedLinks,
}) => {
  const [kecamatanOptionsBaru, setKecamatanOptionsBaru] = useState<any[]>([]);
  const [kelurahanOptionsBaru, setKelurahanOptionsBaru] = useState<any[]>([]);
  const [blokOptionsBaru, setBlokOptionsBaru] = useState<any[]>([]);
  const [zntOptions, setZntOptions] = useState<string[]>([]);
  const [showLahanKeterangan, setShowLahanKeterangan] = useState(false);
  const [provinsiOptions, setProvinsiOptions] = useState<string[]>([]);

  const [kabupatenOptions, setKabupatenOptions] = useState<any[]>([]);

  const [kecamatanOptions, setKecamatanOptions] = useState<any[]>([]);

  const [kelurahanOptions, setKelurahanOptions] = useState<any[]>([]);
  const [valueProvinsi, setValueProvinsi] = useState<string | null>(null);
  const [valueKabupaten, setValueKabupaten] = useState<string | null>(null);
  const [valueKecamatan, setValueKecamatan] = useState<string | null>(null);
  const [valueKelurahan, setValueKelurahan] = useState<string | null>(null);
  const [kabupatenOptionsFiltered, setKabupatenOptionsFiltered] = useState<string[]>([]);
  const [kecamatanOptionsFiltered, setKecamatanOptionsFiltered] = useState<string[]>([]);
  const [kelurahanOptionsFiltered, setKelurahanOptionsFiltered] = useState<string[]>([]);

  const [wajibPajakOptions, setWajibPajakOptions] = useState<any[]>([]);
  const [rawInputWajibPajak, setRawInputWajibPajak] = useState("");
  const [loadingWajibPajak, setLoadingWajibPajak] = useState(false);
  const [disableNoIdentitas, setDisableNoIdentitas] = useState(false);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Fetch data kecamatan dari backend
        const responseProvinsi = await axios.get<ApiResponse<Provinsi>>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getkodeprovinsi`);
        const provinsiData = responseProvinsi.data.data.map((item) => `${item.KD_PROV} - ${item.NM_PROV}`);
        setProvinsiOptions(provinsiData);

        // Fetch data kelurahan dari backend
        const responseKabupaten = await axios.get<ApiResponse<Kabupaten>>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getkodekabupaten`);
        const kabupatenData = responseKabupaten.data.data;
        setKabupatenOptions(kabupatenData);

        // Fetch data kelurahan dari backend
        const responseKecamatan = await axios.get<ApiResponse<Kecamatan>>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getkodekecamatan`);
        const kecamatanData = responseKecamatan.data.data;
        setKecamatanOptions(kecamatanData);

        // Fetch data kelurahan dari backend
        const responseKelurahan = await axios.get<ApiResponse<Kelurahan>>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getkodekelurahan`);
        const kelurahanData = responseKelurahan.data.data;
        setKelurahanOptions(kelurahanData);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, []);

  const fetchWajibPajak = async (noIdentitas: string) => {
    try {
      setLoadingWajibPajak(true);

      const onlyDigits = noIdentitas.replace(/\D/g, "");

      const response = await axios.get<ApiResponse<WajibPajak>>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/wajibpajak?noIdentitas=${onlyDigits}`);

      if (response.status === 200 && response.data.code === 404) {
        console.log("Nomor identitas tidak ditemukan!");

        setWajibPajakOptions([
          {
            label: "Nomor identitas tidak ditemukan!!!",
            value: "not_found",
            namaWajibPajak: "",
          },
        ]);
        return;
      }

      const data = response.data.data;

      const formatted = data.map((item) => ({
        label: `${item.id} - ${item.name}`,
        value: item.id,
        namaWajibPajak: item.name,
      }));

      setWajibPajakOptions(formatted);
    } catch (error) {
      if (error instanceof AxiosError && (await error).status === 404) {
        setWajibPajakOptions([
          {
            label: "Nomor identitas tidak ditemukan!!!",
            value: "not_found",
            namaWajibPajak: "",
          },
        ]);
      }
    } finally {
      setLoadingWajibPajak(false);
    }
  };

  useEffect(() => {
    if (!rawInputWajibPajak || rawInputWajibPajak.length < 6) return;

    const handler = setTimeout(() => {
      fetchWajibPajak(rawInputWajibPajak);
    }, 300);

    return () => clearTimeout(handler);
  }, [rawInputWajibPajak]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseZnt = await axios.get<ApiResponse<ZNT>>(
          `${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/kodeznt?tahun=2024&kd_prov=${nopBaru.slice(0, 2)}&kd_kab=${nopBaru.slice(2, 4)}&kd_kec=${nopBaru.slice(4, 7)}&kd_kel=${nopBaru.slice(7, 10)}`
        );
        const ZNTData = responseZnt.data.data.map((item) => `${item.kdZnt} - ${formatRibuan(item.nir * 1000)}`);
        setZntOptions(ZNTData);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    if (nopBaru) {
      fetchData();
    }
  }, [nopBaru]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const kecamatanRes = await axios.get<any>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/kodekecamatan`);
        const kelurahanRes = await axios.get<any>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/kodekelurahan`);
        const blokRes = await axios.get<any>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/kodeblok`);

        const kecamatanFiltered = kecamatanRes.data.data.filter((item: any) => item.kdPropinsi === fixedProvinsi && item.kdDati2 === fixedKabupaten);

        const kelurahanFiltered = kelurahanRes.data.data.filter((item: any) => item.kdPropinsi === fixedProvinsi && item.kdDati2 === fixedKabupaten);

        const blokFiltered = blokRes.data.data.filter((item: any) => item.kdPropinsi === fixedProvinsi && item.kdDati2 === fixedKabupaten);

        setKecamatanOptionsBaru(kecamatanFiltered);
        setKelurahanOptionsBaru(kelurahanFiltered);
        setBlokOptionsBaru(blokFiltered);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  // Filter kelurahan berdasarkan kecamatan
  const filteredKelurahan = kelurahanOptionsBaru.filter((item: any) => item.kdKecamatan === selectedKecamatanBaru?.kdKecamatan);

  // Filter blok berdasarkan kelurahan dan kecamatan
  const filteredBlok = blokOptionsBaru.filter((item: any) => item.kdKecamatan === String(selectedKecamatanBaru?.kdKecamatan).padStart(3, "0") && item.kdKelurahan === String(selectedKelurahanBaru?.kdKelurahan).padStart(3, "0"));

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpopData({ ...spopData, [name]: value });

    if (name === "lahanProduksiPangan" && value === "Benar") {
      setShowLahanKeterangan(true);
    } else if (name === "lahanProduksiPangan" && value === "Tidak Benar") {
      setShowLahanKeterangan(false);
    }
  };

  const handleOnChangeKabupaten = (event: React.SyntheticEvent, newValue: string | null) => {
    setValueProvinsi(newValue);

    setWajibPajak((prev: any) => ({
      ...prev,
      kd_provinsi: newValue || "",
      kd_kabupaten: "",
      kd_kecamatan: "",
      kd_kelurahan: "",
    }));

    const kodeProv = newValue?.split(" - ")[0];
    const filteredKabupaten = kabupatenOptions.filter((item) => item.KD_PROV === kodeProv).map((item) => `${item.KD_KAB} - ${item.NM_KAB}`);

    setKabupatenOptionsFiltered(filteredKabupaten);
    setKecamatanOptionsFiltered([]);
    setKelurahanOptionsFiltered([]);
  };

  const handleOnChangeKecamatan = (event: React.SyntheticEvent, newValue: string | null) => {
    setValueKabupaten(newValue);

    setWajibPajak((prev: any) => ({
      ...prev,
      kd_kabupaten: newValue || "",
      kd_kecamatan: "",
      kd_kelurahan: "",
    }));

    const kodeKab = newValue?.split(" - ")[0];
    const kodeProv = valueProvinsi?.split(" - ")[0];

    const filteredKecamatan = kecamatanOptions.filter((item) => item.KD_KAB === kodeKab && item.KD_PROV === kodeProv).map((item) => `${item.KD_KEC} - ${item.NM_KEC}`);

    setKecamatanOptionsFiltered(filteredKecamatan);
    setKelurahanOptionsFiltered([]);
  };

  const handleOnChangeKelurahan = (event: React.SyntheticEvent, newValue: string | null) => {
    setValueKecamatan(newValue);

    setWajibPajak((prev: any) => ({
      ...prev,
      kd_kecamatan: newValue || "",
      kd_kelurahan: "",
    }));

    const kodeKec = newValue?.split(" - ")[0];
    const kodeKab = valueKabupaten?.split(" - ")[0];
    const kodeProv = valueProvinsi?.split(" - ")[0];

    const filteredKelurahan = kelurahanOptions.filter((item) => item.KD_KEC === kodeKec && item.KD_KAB === kodeKab && item.KD_PROV === kodeProv).map((item) => `${item.KD_KEL} - ${item.NM_KEL}`);

    setKelurahanOptionsFiltered(filteredKelurahan);
  };

  if (isLoading) {
    return <Typography>Loading SPOP data...</Typography>;
  }

  if (!spopData) {
    return <Typography>Data SPOP tidak ditemukan untuk NOP: {nopBaru}</Typography>;
  }

  return (
    <>
      <Box flex={1} maxWidth={{ xs: "100%", md: "30%" }} my={2}>
        <Box mt={2}>
          <Autocomplete
            fullWidth
            disabled={isFromEdit}
            options={kecamatanOptionsBaru}
            getOptionLabel={nop ? (option) => `${option.kdKecamatan || ""} - ${option.nmKecamatan || ""}` : (option) => `${option.kdKecamatan.padStart(3, "0") || ""} - ${option.nmKecamatan || ""}`}
            value={selectedKecamatanBaru}
            onChange={(e, newValue) => {
              setSelectedKecamatanBaru(newValue);
              setSelectedKelurahanBaru(null);
              setSelectedBlokBaru(null);
              setKdKecBaru(newValue.kdKecamatan);
            }}
            renderInput={(params) => <TextField {...params} label="Kecamatan" required />}
          />
        </Box>
        <Box mt={2}>
          <Autocomplete
            fullWidth
            disabled={!selectedKecamatanBaru}
            options={filteredKelurahan}
            getOptionLabel={nop ? (option) => `${option.kdKelurahan || ""} - ${option.nmKelurahan || ""}` : (option) => `${option.kdKelurahan.padStart(3, "0") || ""} - ${option.nmKelurahan || ""}`}
            value={selectedKelurahanBaru}
            onChange={(e, newValue) => {
              setSelectedKelurahanBaru(newValue);
              setSelectedBlokBaru(null);
              setKdKelBaru(newValue.kdKelurahan);
            }}
            renderInput={(params) => <TextField {...params} label="Kelurahan" required />}
          />
        </Box>
        <Box mt={2}>
          <Autocomplete
            fullWidth
            disabled={!selectedKelurahanBaru}
            options={filteredBlok}
            getOptionLabel={nop ? (option) => `${option.kdBlok || ""}` : (option) => `${option.kdBlok.padStart(3, "0") || ""}`}
            value={selectedBlokBaru}
            onChange={(e, newValue) => {
              setSelectedBlokBaru(newValue);
              setKdBlokBaru(newValue.kdBlok);
            }}
            renderInput={(params) => <TextField {...params} label="Blok" required />}
          />
        </Box>
      </Box>
      <Divider />
      <Box mt={2}>
        <TextField sx={{ width: { xs: "fullwidth", md: "100%" } }} label="Nomor Objek Pajak" name="nop" value={nopBaru ? formatNop(nopBaru) : nop ? formatNop(nop) : ""} disabled />
      </Box>
      <Box display="flex" flexWrap="wrap">
        <LetakOPdanDataBumiBaru spopData={spopData} setSpopData={setSpopData} zntOptions={zntOptions} showLahanKeterangan={showLahanKeterangan} onValidityChangeB={onValidityChangeB} handleRadioChange={handleRadioChange} />
        <DataWPdanFotoBaru
          nopBaru={nopBaru}
          spopData={spopData}
          setSpopData={setSpopData}
          loadingWajibPajak={loadingWajibPajak}
          wajibPajakOptions={wajibPajakOptions}
          disableNoIdentitas={disableNoIdentitas}
          setRawInputWajibPajak={setRawInputWajibPajak}
          setDisableNoIdentitas={setDisableNoIdentitas}
          provinsiOptions={provinsiOptions}
          valueProvinsi={valueProvinsi}
          handleOnChangeKabupaten={handleOnChangeKabupaten}
          kabupatenOptionsFiltered={kabupatenOptionsFiltered}
          valueKabupaten={valueKabupaten}
          handleOnChangeKecamatan={handleOnChangeKecamatan}
          kecamatanOptionsFiltered={kecamatanOptionsFiltered}
          valueKecamatan={valueKecamatan}
          handleOnChangeKelurahan={handleOnChangeKelurahan}
          kelurahanOptionsFiltered={kelurahanOptionsFiltered}
          valueKelurahan={valueKelurahan}
          setValueKelurahan={setValueKelurahan}
          setWajibPajak={setWajibPajak}
          rawInputWajibPajak={rawInputWajibPajak}
          wajibPajak={wajibPajak}
          onValidityChange={onValidityChange}
          files={files}
          setFiles={setFiles}
          deletedLinks={deletedLinks}
          setDeletedLinks={setDeletedLinks}
        />
      </Box>
    </>
  );
};

export default SPOPFormBaru;
