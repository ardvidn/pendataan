export const kdJpbDescriptions: Record<string, string> = {
  "01": "01 - PERUMAHAN",
  "02": "02 - PERKANTORAN SWASTA",
  "03": "03 - PABRIK",
  "04": "04 - TOKO/APOTIK/PASAR/RUKO",
  "05": "05 - RUMAH SAKIT/KLINIK",
  "06": "06 - OLAH RAGA/REKREASI",
  "07": "07 - HOTEL/WISMA",
  "08": "08 - BENGKEL/GUDANG/PERTANIAN",
  "09": "09 - GEDUNG PEMERINTAH",
  "10": "10 - LAIN-LAIN",
  "11": "11 - BANGUNAN TIDAK KENA PAJAK",
  "12": "12 - BANGUNAN PARKIR",
  "13": "13 - APARTEMEN",
  "14": "14 - POMPA BENSIN",
  "15": "15 - TANGKI MINYAK",
  "16": "16 - GEDUNG SEKOLAH",
  "17": "17 - BANGUNAN WALET",
};
export const kondisiBangunanOptions: Record<string, string> = { "1": "SANGAT BAIK", "2": "BAIK", "3": "SEDANG", "4": "JELEK" };

export const konstruksiBangunanOptions: Record<string, string> = { "1": "BAJA", "2": "BETON", "3": "BATU BATA", "4": "KAYU" };

export const atapBangunanOptions: Record<string, string> = { "1": "DECRABOND / BETON / GENTENG GLAZUR", "2": "GENTENG BETON / ALUMUNIUM", "3": "GENTENG BIASA / SIRAP", "4": "ASBES", "5": "SENG" };

export const dindingBangunanOptions: Record<string, string> = { "1": "KACA / ALUMUNIUM", "2": "BETON", "3": "BATU BATA / CONBLOCK", "4": "KAYU", "5": "SENG", "6": "TIDAK ADA" };

export const lantaiBangunanOptions: Record<string, string> = { "1": "MARMER", "2": "KERAMIK", "3": "TERASO", "4": "UBIN PC / PAPAN", "5": "SEMEN" };

export const langitLangitBangunanOptions: Record<string, string> = { "1": "AKUSTIK / JATI", "2": "TRIPLEK / ASBES BAMBU", "3": "TIDAK ADA" };

export function getKeyByContainsValue<T extends Record<string | number, string>>(object: T, searchValue: string): keyof T | undefined {
  const normalizedSearch = String(searchValue)?.toLowerCase().trim();

  // Cek format "number - description" terlebih dahulu
  const codeMatch = normalizedSearch?.match(/^(\d+)\s*-/);
  if (codeMatch && object[codeMatch[1] as keyof T]) {
    return codeMatch[1] as keyof T;
  }

  // Cari berdasarkan contains
  return (Object.keys(object) as Array<keyof T>).find((key) => object[key]?.toLowerCase().includes(normalizedSearch) || normalizedSearch?.includes(object[key]?.toLowerCase()));
}

export function getValueByKeys<T extends Record<K, V>, K extends string | number, V>(object: T, keys: Array<K> | K | undefined): V | undefined {
  if (!keys) return undefined;
  const keysArray = Array.isArray(keys) ? keys : [keys];
  for (const key of keysArray) {
    if (key in object) {
      return object[key];
    }
  }
  return undefined;
}
