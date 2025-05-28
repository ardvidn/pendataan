import { createOptionsFromArray } from "./optionsHelper";

export const getJenisBumiLabel = (value: string) => {
  switch (value) {
    case "1":
      return "Tanah + Bangunan";
    case "2":
      return "Kavling Siap Bangun";
    case "3":
      return "Tanah Kosong";
    case "4":
      return "Fasilitas Umum";
    case "5":
      return "Lain-Lain";
    default:
      return "Tidak Diketahui";
  }
};

// Mock data for autocomplete options
export const statusWpOptions = ["PEMILIK", "PENYEWA", "PENGELOLA", "PEMAKAI", "SENGKETA"];
export const jenisBumiOptions = createOptionsFromArray(["TANAH + BANGUNAN", "KAVLING SIAP BANGUN", "TANAH KOSONG", "FASILITAS UMUM", "LAIN - LAIN"]);
export const jenisAsalTanahOptions = createOptionsFromArray(["RAWA", "GAMBUT", "DARAT"]);
export const jenisWpOptions = { "1": "ORANG PRIBADI", "2": "BADAN USAHA" };
export const jenisWpOptionList = Object.entries(jenisWpOptions).map(([key, label]) => ({
  key,
  label,
}));
export const jenisIdentitasOptions = ["KTP", "KITAS", "PASSPORT", "RANDOM"];
export const jenisKelaminOptions = ["LAKI-LAKI", "PEREMPUAN"];
export const pekerjaanOptions = ["PNS", "ABRI", "PENSIUNAN", "BADAN", "LAINNYA"];
export const jenisPeruntukanOptions = ["KOMERSIL", "NON KOMERSIL"];
export const jenisBadanUsahaOptions = ["PT", "CV", "KOPERASI", "YAYASAN", "RANDOM"];
export const kodeStatusCabangOptions = ["Bukan Cabang", "Cabang"];
export const kodeJpb = [
  "01 -	PERUMAHAN",
  "02 -	PERKANTORAN SWASTA",
  "03	- PABRIK",
  "04	- TOKO/APOTIK/PASAR/RUKO",
  "05	- RUMAH SAKIT/KLINIK",
  "06	- OLAH RAGA/REKREASI",
  "07	- HOTEL/WISMA",
  "08	- BENGKEL/GUDANG/PERTANIAN",
  "09	- GEDUNG PEMERINTAH",
  "10	- LAIN-LAIN",
  "11	- BANGUNAN TIDAK KENA PAJAK",
  "12	- BANGUNAN PARKIR",
  "13	- APARTEMEN",
  "14	- POMPA BENSIN",
  "15	- TANGKI MINYAK",
  "16	- GEDUNG SEKOLAH",
  "17 - BANGUNAN WALET",
];
export const kondisiBangunanOptions = ["1 - SANGAT BAIK", "2 - BAIK", "3 - SEDANG", "4 - JELEK"];

export const konstruksiBangunanOptions = ["1 - BAJA", "2 - BETON", "3 - BATU BATA", "4 - KAYU"];

export const atapBangunanOptions = ["1 - DECRABOND / BETON / GENTENG GLAZUR", "2 - GENTENG BETON / ALUMUNIUM", "3 - GENTENG BIASA / SIRAP", "4 - ASBES", "5 - SENG"];

export const dindingBangunanOptions = ["1 - KACA / ALUMUNIUM", "2 - BETON", "3 - BATU BATA / CONBLOCK", "4 - KAYU", "5 - SENG", "6 - TIDAK ADA"];

export const lantaiBangunanOptions = ["1 - MARMER", "2 - KERAMIK", "3 - TERASO", "4 - UBIN PC / PAPAN", "5 - SEMEN"];

export const langitLangitBangunanOptions = ["1 - AKUSTIK / JATI", "2 - TRIPLEK / ASBES BAMBU", "3 - TIDAK ADA"];

export const jenisPajak = [
  { jenispajak: "HOTEL" },
  { jenispajak: "RESTORAN" },
  { jenispajak: "HIBURAN" },
  { jenispajak: "REKLAME" },
  { jenispajak: "PAJAK PENERANGAN JALAN" },
  { jenispajak: "MBLB" },
  { jenispajak: "PARKIR" },
  { jenispajak: "PAJAK AIR TANAH" },
  { jenispajak: "WALET" },
];
