export const formatNop = (value: string) => {
  // Hapus semua karakter non-digit
  let numbersOnly = value.replace(/\D/g, "");

  // Pastikan panjang maksimal 18 digit
  numbersOnly = numbersOnly.slice(0, 18);

  // Format sesuai pola "XX.XX.XXX.XXX.XXX.XXXX.X"
  const formatted = numbersOnly
    .replace(/^(\d{2})(\d{0,2})/, "$1.$2") // 2 digit pertama + titik + 2 digit berikutnya
    .replace(/^(\d{2})\.(\d{2})(\d{0,3})/, "$1.$2.$3") // 2 digit + titik + 2 digit + titik + 3 digit
    .replace(/^(\d{2})\.(\d{2})\.(\d{3})(\d{0,3})/, "$1.$2.$3.$4") // tambah 3 digit + titik + 3 digit
    .replace(/^(\d{2})\.(\d{2})\.(\d{3})\.(\d{3})(\d{0,3})/, "$1.$2.$3.$4.$5") // tambah 3 digit + titik + 3 digit
    .replace(/^(\d{2})\.(\d{2})\.(\d{3})\.(\d{3})\.(\d{3})(\d{0,4})/, "$1.$2.$3.$4.$5.$6") // tambah 4 digit + titik + 1 digit
    .replace(/^(\d{2})\.(\d{2})\.(\d{3})\.(\d{3})\.(\d{3})\.(\d{4})(\d{0,1})/, "$1.$2.$3.$4.$5.$6.$7"); // tambah 1 digit terakhir

  return formatted;
};
