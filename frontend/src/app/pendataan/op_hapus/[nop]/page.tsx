/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { logged, ResponseData } from "@/utils/interface";
import { formatNop } from "@/utils/formatNOP";
import { formatRibuan } from "@/utils/FormatForm";
import { Button } from "@mui/material";
import { preparePayload } from "@/utils/FormPayload";
import toast, { Toaster } from "react-hot-toast";
import { jenisBumiOptions, kodeJpb, statusWpOptions } from "@/utils/labelData";
import { getLabelFromKode } from "@/utils/optionsHelper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OpHapusForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [spopData, setSpopData] = useState<Record<any, any>>({});
  const [wajibPajak, setWajibPajak] = useState<Record<string, any>>({});
  const [lspopData, setLspopData] = useState<Record<any, any>[]>([]);
  const [value, setValue] = useState(0);
  const [isSpopValid, setIsSpopValid] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [username, setUsername] = useState("");
  const paramsNOP = useParams<{ nop: string }>();
  const isFromEdit = searchParams.get("source") === "edit";

  const currentBuilding = lspopData[currentIndex];

  useEffect(() => {
    const fetchDatOpPajakUpdateNOP = async () => {
      try {
        if (isFromEdit) {
          const [pendataanRes, pbbRes] = await Promise.all([
            axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getoppajakupdatebynop?nop=${paramsNOP.nop}`),
            axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/datobjekpajak?nop=${paramsNOP.nop}`),
          ]);

          const dataPendataan = pendataanRes.data.data;
          const dataPBB = pbbRes.data.data;

          setSpopData({
            ...dataPBB.dat_op_pajak,
            keterangan: dataPendataan.dat_op_pajak.keterangan || "",
          });
          setLspopData(dataPBB.dat_op_bangunan);
          setWajibPajak(dataPBB.wajib_pajak);

          console.log("Data dari PBB + keterangan dari Pendataan");
        } else {
          const response = await axios.get<ResponseData>(`${process.env.NEXT_PUBLIC_PBB_API_URL}/api/retrieve/datobjekpajak?nop=${paramsNOP.nop}`);
          const data = response.data.data;
          setSpopData(data.dat_op_pajak);
          setLspopData(data.dat_op_bangunan);
          setWajibPajak(data.wajib_pajak);

          console.log("Data dari PBB");
        }
      } catch (error) {
        console.error("Error mengambil data:", error);
      } finally {
      }
    };

    fetchDatOpPajakUpdateNOP();
  }, [isFromEdit, paramsNOP.nop]);

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setUsername(res.data.data.username);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const isValid = spopData.keterangan;
    setIsSpopValid(isValid);
  }, [spopData.keterangan]);

  const handleFinish = async () => {
    const updatedSpopData = {
      ...spopData,
      user_pelayanan: username,
      kd_jns_pelayanan: "13",
      kd_pelayanan: "3",
      log_by: username,
      kd_status_wp: statusWpOptions[spopData.kd_status_wp],
      kd_status_cabang: spopData.kd_status_cabang === 0 ? "Bukan Cabang" : "Cabang",
    };

    const payload = preparePayload(updatedSpopData, lspopData, wajibPajak, 0, 0, paramsNOP.nop);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/inputophapus?nop=${paramsNOP.nop}`, payload);
      if (response.status === 200) {
        toast.success(`Berhasil mengunggah op hapus`);

        router.push(`/pendataan/op_hapus`);
      } else {
        toast.error(`Terjadi kesalahan saat mengunggah op hapus`);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Data siap dikirim:", payload);
    console.log("Data siap dikirim:", spopData);
  };

  return (
    <>
      <Toaster position="top-center" />
      <Box width="fullwidth" height="100tvh" sx={{ backgroundColor: "#FFF", borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="SPOP" {...a11yProps(0)} />
            <Tab label="LSPOP" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <CustomTabPanel value={value} index={0}>
            {spopData && wajibPajak && (
              <Box display="flex" flexWrap="wrap">
                <Box flex={1} minWidth="48%" mx={2}>
                  {/* Pendataan SPOP */}
                  <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                    Pendataan SPOP
                  </Typography>
                  <TextField label="NOP" fullWidth margin="normal" value={formatNop(paramsNOP.nop)} disabled />

                  {/* Data Letak Objek Pajak */}
                  <Typography variant="h6" gutterBottom sx={{ mt: 4, color: "red" }}>
                    Data Letak Objek Pajak
                  </Typography>
                  <TextField label="No Persil" fullWidth margin="normal" value={spopData.no_persil || ""} disabled />
                  <TextField label="Alamat" fullWidth margin="normal" value={spopData.jalan_op || ""} disabled />
                  <Box display="flex" gap={2} mt={2}>
                    <TextField label="Blok / Kav / No" fullWidth margin="normal" value={spopData.blok_kav_no_op || ""} disabled />
                    <Box display="flex" gap={1}>
                      <TextField label="RT" fullWidth margin="normal" value={spopData.rt_op || ""} disabled />
                      <TextField label="RW" fullWidth margin="normal" value={spopData.rw_op || ""} disabled />
                    </Box>
                  </Box>
                  <TextField label="Status WP" fullWidth margin="normal" value={statusWpOptions[spopData.kd_status_wp] || ""} disabled />

                  {/* Data Bumi */}
                  <Typography variant="h6" gutterBottom sx={{ mt: 4, color: "red" }}>
                    Data Bumi
                  </Typography>
                  <Box display="flex" gap={2} mt={2}>
                    <TextField label="Luas Tanah" fullWidth margin="normal" value={formatRibuan(parseInt(spopData.total_luas_bumi)) || ""} disabled />
                    <TextField label="Kode ZNT" fullWidth margin="normal" value={spopData.kd_znt || ""} disabled />
                  </Box>
                  <Box display="flex" gap={2}>
                    <TextField label="Jenis Bumi" fullWidth margin="normal" value={getLabelFromKode(jenisBumiOptions, spopData.jns_bumi) || ""} disabled />
                    <TextField label="Jenis Peruntukan" fullWidth margin="normal" value={spopData.jns_peruntukan || ""} disabled />
                  </Box>
                </Box>
                <Box flex={1} minWidth="48%" mx={2}>
                  {/* Data Wajib Pajak */}
                  <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                    Data Wajib Pajak
                  </Typography>
                  <Box display="flex" gap={2} mt={2}>
                    <TextField label="No Identitas" fullWidth margin="normal" value={wajibPajak.no_identitas || ""} disabled />
                    <TextField label="Jenis Identitas" fullWidth margin="normal" value={wajibPajak.jns_identitas || ""} disabled />
                  </Box>
                  <TextField label="Nama Wajib Pajak" fullWidth margin="normal" value={wajibPajak.nm_wp || ""} disabled />
                  <TextField label="Alamat" fullWidth margin="normal" value={wajibPajak.alamat_wp || ""} disabled />
                  <Box display="flex" gap={2}>
                    <TextField label="Blok / Kav / No" fullWidth margin="normal" value={wajibPajak.blok_wp || ""} disabled />
                    <Box display="flex" gap={1}>
                      <TextField label="RT" fullWidth margin="normal" value={wajibPajak.rt_wp || ""} disabled />
                      <TextField label="RW" fullWidth margin="normal" value={wajibPajak.rw_wp || ""} disabled />
                    </Box>
                  </Box>
                  <Box display="flex" gap={2}>
                    <TextField label="Provinsi" fullWidth margin="normal" value={wajibPajak.kd_provinsi || ""} disabled />
                    <TextField label="Kabupaten" fullWidth margin="normal" value={wajibPajak.kd_kabupaten || ""} disabled />
                  </Box>
                  <Box display="flex" gap={2}>
                    <TextField label="Kabupaten" fullWidth margin="normal" value={wajibPajak.kd_kecamatan || ""} disabled />
                    <TextField label="Kabupaten" fullWidth margin="normal" value={wajibPajak.kd_kelurahan || ""} disabled />
                  </Box>

                  {/* Keterangan */}
                  <Typography variant="h6" gutterBottom sx={{ mt: 4, color: "red" }}>
                    Keterangan
                  </Typography>
                  <TextField required label="Alasan NOP dihapus" fullWidth multiline rows={3} margin="normal" value={spopData.keterangan || ""} onChange={(e) => setSpopData({ ...spopData, ["keterangan"]: e.target.value })} />
                </Box>
              </Box>
            )}
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <Box display="flex">
              <Box flex={1} minWidth="68%" mx={2} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box display="flex" gap={2} mt={2}>
                  <Button onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}>←</Button>
                  <TextField label="No Bangunan" value={currentBuilding?.no_bng || ""} InputProps={{ readOnly: true }} disabled />
                  <Button onClick={() => setCurrentIndex((prev) => Math.min(lspopData.length - 1, prev + 1))}>→</Button>
                </Box>

                <Box display="flex" gap={2} mt={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="No Formulir" value={currentBuilding?.no_formulir_lspop || ""} disabled />

                  {/* ... lanjut dengan input lainnya */}
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Jenis Bangunan" value={kodeJpb[currentBuilding?.kd_jpb.trim() - 1] || ""} disabled />
                </Box>
                <Box display="flex" gap={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Tahun Bangun" value={currentBuilding?.bng_thn_dibangun || ""} disabled />
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Tahun Renovasi" value={currentBuilding?.bng_thn_renovasi || ""} disabled />
                </Box>
                <Box display="flex" gap={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Luas Bangunan" value={currentBuilding?.bng_luas || ""} disabled />
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Jumlah Lantai" value={currentBuilding?.bng_jml_lantai || ""} disabled />
                </Box>
                <Box display="flex" gap={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Kondisi Bangunan" value={currentBuilding?.bng_kd_kondisi || ""} disabled />
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Konstruksi Bangunan" value={currentBuilding?.bng_kd_konstruksi || ""} disabled />
                </Box>
                <Box display="flex" gap={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Atap Bangunan" value={currentBuilding?.bng_kd_atap || ""} disabled />
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Dinding Bangunan" value={currentBuilding?.bng_kd_dinding || ""} disabled />
                </Box>
                <Box display="flex" gap={2}>
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Lantai Bangunan" value={currentBuilding?.bng_kd_lantai || ""} disabled />
                  <TextField sx={{ width: { sm: "100%", md: "15%" } }} label="Langit - Langit Bangunan" value={currentBuilding?.bng_kd_langit_langit || ""} disabled />
                </Box>
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: "divider", p: 2, textAlign: "right" }}>
          <Button variant="contained" sx={{ backgroundColor: "#219EBC", color: "#FFF" }} disabled={!isSpopValid} onClick={handleFinish}>
            Finish
          </Button>
        </Box>
      </Box>
    </>
  );
}
