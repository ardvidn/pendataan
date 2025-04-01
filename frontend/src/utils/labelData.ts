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
