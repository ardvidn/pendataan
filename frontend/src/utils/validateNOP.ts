export const validateNOP = (nop: string) => {
  return /^\d{2}\.\d{2}\.\d{3}\.\d{3}\.\d{3}\.\d{4}\.\d{1}$/.test(nop);
};
