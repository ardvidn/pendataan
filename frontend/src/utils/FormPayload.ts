/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";
import { jenisWpOptions, pekerjaanOptions } from "./labelData";
import { getKeyByValue } from "./optionsHelper";

export const preparePayload = (
  spopData: { user_pelayanan?: string; kd_jns_pelayanan?: string; kd_pelayanan?: string; log_by: any; kd_status_wp?: any; tgl_sertifikat?: any; jns_asaltanah?: any; is_pangan_ternak?: any; tanggal_lahir_wp?: any },
  lspopData: any[],
  wajib_pajak: Record<string, any>,
  lat: number,
  long: number,
  nop: string
): any => {
  return {
    dat_op_pajak: {
      ...spopData,
      latitude: lat,
      longitude: long,
      kd_status_wp: spopData.kd_status_wp.label,
      tgl_sertifikat: dayjs(spopData.tgl_sertifikat).format("DD-MM-YYYY") === "Invalid Date" ? null : dayjs(spopData.tgl_sertifikat).format("DD-MM-YYYY"),
      jns_asaltanah: spopData.jns_asaltanah,
      is_pangan_ternak: spopData.is_pangan_ternak === "Benar" ? true : false,
    },
    wajib_pajak: {
      ...wajib_pajak,
      tanggal_lahir_wp: dayjs(spopData.tanggal_lahir_wp).format("DD-MM-YYYY") || null,
      pekerjaan_wp: pekerjaanOptions.indexOf(wajib_pajak.pekerjaan_wp) + 1,
      jns_wp: getKeyByValue(jenisWpOptions, wajib_pajak.jns_wp) || "1",
    },
    dat_op_bangunan: lspopData.map((bgn: any, index: number) => {
      return {
        no_bng: bgn.no_bng || index + 1,
        nop: nop || "",
        kd_jpb: bgn.kd_jpb || "2",
        no_formulir_lspop: bgn.no_formulir_lspop || "",
        bng_thn_dibangun: parseInt(bgn.bng_thn_dibangun) || null,
        bng_thn_renovasi: bgn.bng_thn_renovasi || "",
        bng_luas: parseFloat(bgn.bng_luas) || 0,
        bng_jml_lantai: parseInt(bgn.bng_jml_lantai) || 1,
        bng_kd_kondisi: bgn.bng_kd_kondisi || "",
        bng_kd_konstruksi: bgn.bng_kd_konstruksi || "",
        bng_kd_atap: bgn.bng_kd_atap || "",
        bng_kd_dinding: bgn.bng_kd_dinding || "",
        bng_kd_lantai: bgn.bng_kd_lantai || "",
        bng_kd_langit_langit: bgn.bng_kd_langit_langit || "",
        bng_nilai_sistem: parseFloat(bgn.bng_nilai_sistem) || null,
        bng_ins_transaksi: bgn.bng_ins_transaksi || "2",
        bng_keterangan: bgn.bng_keterangan || "",
        jpb2_kls: bgn.jpb2_kls || null,
        jpb3_tinggi_kolom: parseInt(bgn.jpb3_tinggi_kolom) || null,
        jpb3_lbr_bentang: parseInt(bgn.jpb3_lbr_bentang) || null,
        jpb3_luas_mezzanine: parseInt(bgn.jpb3_luas_mezzanine) || null,
        jpb3_keliling_dinding: parseInt(bgn.jpb3_keliling_dinding) || null,
        jpb3_daya_dukung_lantai: parseInt(bgn.jpb3_daya_dukung_lantai) || null,
        jpb9_kls: bgn.jpb9_kls || null,
        log_by: spopData.log_by, // session
      };
    }),
  };
};
