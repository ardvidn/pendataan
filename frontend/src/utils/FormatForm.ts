export const formatRibuan = (angka: number): string => {
  return angka.toLocaleString("id-ID");
};

export const formatRupiah = (angka: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

export const toDateInputValue = (date: Date | null) => {
  if (!date) return "";
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
};

// Format No Sertifikat: 11.11.11.11.1.11111
export const formatNoSertifikat = (value: string) => {
  const raw = value.replace(/\D/g, "");
  const parts = [raw.slice(0, 2), raw.slice(2, 4), raw.slice(4, 6), raw.slice(6, 8), raw.slice(8, 9), raw.slice(9, 14)];
  return parts.filter(Boolean).join(".");
};

export const isNoSertifikatValid = (value: string) => {
  if (!value) return true;
  const digits = value.replace(/\D/g, "");
  return digits.length === 14;
};

export const isMaxDigitsValid = (value: string) => {
  if (!value) return true;
  return /^\d{0,3}$/.test(value);
};

export const isTeleponValid = (value: string) => {
  if (!value) return true;
  return /^\d{0,16}$/.test(value);
};
