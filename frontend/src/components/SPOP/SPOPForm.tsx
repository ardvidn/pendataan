/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import AxiosError from "axios";
import { ApiResponse, Kabupaten, Kecamatan, Kelurahan, Provinsi, WajibPajak, ZNT } from "@/utils/interface";
import { formatRibuan } from "@/utils/FormatForm";
import LetakOPdanDataBumi from "./letakOPdanDataBumi";
import DataWPdanFoto from "./DataWPdanFoto";
import { formatNop } from "@/utils/formatNOP";

interface SpopFormProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  deletedLinks: string[];
  setDeletedLinks: React.Dispatch<React.SetStateAction<string[]>>;
  nop: string;
  setSpopData: React.Dispatch<React.SetStateAction<any>>;
  spopData: any;
  isLoading: boolean;
  wajibPajak: any;
  setWajibPajak: React.Dispatch<React.SetStateAction<any>>;
  onValidityChange: (isValid: boolean) => void;
  onValidityChangeB: (isValid: boolean) => void;
}

export const SPOPForm = ({ nop, setSpopData, spopData, isLoading, wajibPajak, setWajibPajak, onValidityChange, onValidityChangeB, files, setFiles, deletedLinks, setDeletedLinks }: SpopFormProps) => {
  const [showLahanKeterangan, setShowLahanKeterangan] = useState(false);
  const [provinsiOptions, setProvinsiOptions] = useState<string[]>([]);

  const [kabupatenOptions, setKabupatenOptions] = useState<any[]>([]);

  const [kecamatanOptions, setKecamatanOptions] = useState<any[]>([]);

  const [kelurahanOptions, setKelurahanOptions] = useState<any[]>([]);
  const [zntOptions, setZntOptions] = useState<string[]>([]);
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

        // fetch data ZNT
        const responseZnt = await axios.get<ApiResponse<ZNT>>(
          `${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/kodeznt?tahun=2024&kd_prov=${nop.slice(0, 2)}&kd_kab=${nop.slice(2, 4)}&kd_kec=${nop.slice(4, 7)}&kd_kel=${nop.slice(7, 10)}`
        );
        const ZNTData = responseZnt.data.data.map((item) => `${item.kdZnt} - ${formatRibuan(item.nir * 1000)}`);
        setZntOptions(ZNTData);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, [nop]);

  const fetchWajibPajak = async (noIdentitas: string) => {
    try {
      setLoadingWajibPajak(true);

      const onlyDigits = noIdentitas.replace(/\D/g, "");

      const response = await axios.get<ApiResponse<WajibPajak>>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/wajibpajak?noIdentitas=${onlyDigits}`);

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
    return <Typography>Data SPOP tidak ditemukan untuk NOP: {nop}</Typography>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSpopData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (parentKey: string, childKey: string, value: string) => {
    setSpopData((prevData: any) => ({
      ...prevData,
      [parentKey]: {
        ...prevData[parentKey],
        [childKey]: value,
      },
    }));
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setSpopData({ ...spopData, [name]: value });
  };

  const handleAutocompleteChange = (name: string, value: string, index?: number) => {
    if (["kdZnt", "jnsBumi"].includes(name) && typeof index === "number") {
      setSpopData((prevData: { datOpBumis: any }) => {
        const newDatOpBumis = [...prevData.datOpBumis];
        newDatOpBumis[index] = {
          ...newDatOpBumis[index],
          [name]: value,
        };

        return {
          ...prevData,
          datOpBumis: newDatOpBumis,
        };
      });
    } else {
      setSpopData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    }
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

  return (
    <>
      <Box width="100%">
        <Box mt={2}>
          <TextField sx={{ width: { xs: "fullwidth", md: "100%" } }} label="Nomor Objek Pajak" name="nop" value={formatNop(nop)} disabled />
        </Box>
        <Box display="flex" flexWrap="wrap">
          <LetakOPdanDataBumi
            spopData={spopData}
            setSpopData={setSpopData}
            handleChange={handleChange}
            handleRadioChange={handleRadioChange}
            zntOptions={zntOptions}
            showLahanKeterangan={showLahanKeterangan}
            handleDateChange={handleDateChange}
            handleAutocompleteChange={handleAutocompleteChange}
            onValidityChangeB={onValidityChangeB}
          />

          <DataWPdanFoto
            nop={nop}
            spopData={spopData}
            setSpopData={setSpopData}
            handleAutocompleteChange={handleAutocompleteChange}
            loadingWajibPajak={loadingWajibPajak}
            wajibPajakOptions={wajibPajakOptions}
            disableNoIdentitas={disableNoIdentitas}
            setRawInputWajibPajak={setRawInputWajibPajak}
            handleNestedChange={handleNestedChange}
            setDisableNoIdentitas={setDisableNoIdentitas}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
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
      </Box>
    </>
  );
};
