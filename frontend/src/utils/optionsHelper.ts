export interface OptionItem {
  kode: string;
  label: string;
}

// Converts array like ["A", "B", "C"] to [{ kode: "1", label: "A" }, ...]
export const createOptionsFromArray = (arr: string[]): OptionItem[] => arr.map((label, index) => ({ kode: String(index + 1), label }));

export const getLabelFromKode = (options: OptionItem[], kode: string): string => options.find((item) => item.kode === kode)?.label || "";

export const getKodeFromLabel = (options: OptionItem[], label: string): string => options.find((item) => item.label === label)?.kode || "";

export function getValueByKey<T extends Record<string | number, string>>(object: T, searchKey: string | number): string | undefined {
  return object[searchKey];
}

export function getKeyByValue<T extends Record<string | number, string>>(object: T, searchValue: string): string | number | undefined {
  return Object.keys(object).find((key) => object[key] === searchValue);
}
