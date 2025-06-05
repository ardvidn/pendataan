import { Request, Response } from "express";
import { DatObjekPajak } from "../entity/DatObjekPajak";
import { AppDataSource } from "../data-resource";
import { atapBangunanOptions, dindingBangunanOptions, getValueByKeys, kdJpbDescriptions, kondisiBangunanOptions, konstruksiBangunanOptions, langitLangitBangunanOptions, lantaiBangunanOptions } from "../utils/labelData";

export const getAllDatObjekPajak = async (req: Request, res: Response) => {
  try {
    const nop = req.query.nop as string;

    if (!nop || nop.length !== 18) {
      return res.status(404).json({
        code: 404,
        message: "masukkan nop",
      });
    }

    const datObjekPajakRepository = AppDataSource.getRepository(DatObjekPajak);
    const datObjekPajaks = await datObjekPajakRepository.findOne({
      where: {
        kdPropinsi: nop.slice(0, 2),
        kdDati2: nop.slice(2, 4),
        kdKecamatan: nop.slice(4, 7),
        kdKelurahan: nop.slice(7, 10),
        kdBlok: nop.slice(10, 13),
        noUrut: nop.slice(13, 17),
        kdJnsOp: nop.slice(17, 18),
      },
      // select: {
      //   kdPropinsi: true,
      //   kdDati2: true,
      //   kdKecamatan: true,
      //   kdKelurahan: true,
      //   kdBlok: true,
      //   noUrut: true,
      //   kdJnsOp: true,
      //   jalanOp: true,
      //   rtOp: true,
      //   rwOp: true,
      //   totalLuasBumi: true,
      //   totalLuasBng: true,
      //   njopBumi: true,
      //   njopBng: true,
      //   subjekPajakId: true,
      //   statusPetaOp: true,
      //   tglPendataanOp: true,
      //   tglPerekamanOp: true,
      // },
      relations: {
        subjekPajak: true, // Tetap diambil jika perlu
        datOpBangunans: true, // Tambahkan relasi
        datOpBumis: true, // Tambahkan relasi
      },
    });

    // Filter hanya data yang diperlukan dari `datOpBangunans` dan `datOpBumis`
    // const filteredData = datObjekPajaks.map((op) => ({
    //   ...op,
    //   datOpBangunans: op.datOpBangunans?.map((bng) => ({
    //     noBng: bng.noBng,
    //     kdJpb: kdJpbDescriptions[bng.kdJpb] ?? bng.kdJpb,
    //     luasBng: bng.luasBng,
    //     jmlLantaiBng: bng.jmlLantaiBng,
    //     thnDibangunBng: bng.thnDibangunBng,
    //     thnRenovasiBng: bng.thnRenovasiBng,
    //     kondisiBng: kondisiBangunanOptions[bng.kondisiBng],
    //     jnsKonstruksiBng: konstruksiBangunanOptions[bng.jnsKonstruksiBng ?? ""],
    //     jnsAtapBng: atapBangunanOptions[bng.jnsAtapBng ?? ""],
    //     kdDinding: dindingBangunanOptions[bng.kdDinding ?? ""],
    //     kdLantai: lantaiBangunanOptions[bng.kdLantai ?? ""],
    //     kdLangitLangit: langitLangitBangunanOptions[bng.kdLangitLangit ?? ""],
    //     jnsTransaksiBng: bng.jnsTransaksiBng,
    //   })),
    //   datOpBumis: op.datOpBumis?.map((bumi) => ({
    //     noBumi: bumi.noBumi,
    //     kdZnt: bumi.kdZnt,
    //     luasBumi: bumi.luasBumi,
    //     jnsBumi: bumi.jnsBumi,
    //   })),
    // }));

    // Format data sesuai dengan struktur yang diinginkan
    const filteredData = {
      dat_op_pajak: {
        nop: "",
        nop_join: "",
        jalan_op: datObjekPajaks?.jalanOp || "",
        total_luas_bumi: datObjekPajaks?.totalLuasBumi || 0,
        total_luas_bng: datObjekPajaks?.totalLuasBng || 0,
        blok_kav_no_op: datObjekPajaks?.kdBlok || "",
        rw_op: datObjekPajaks?.rwOp || "",
        rt_op: datObjekPajaks?.rtOp || "",
        kd_status_wp: datObjekPajaks?.kdStatusWp,
        kd_znt: datObjekPajaks?.datOpBumis[0]?.kdZnt || "",
        jns_bumi: datObjekPajaks?.datOpBumis[0]?.jnsBumi || "",
        jns_transaksi_op: datObjekPajaks?.datOpBangunans[0]?.jnsTransaksiBng || "2",
        no_sertifikat: "",
        tgl_sertifikat: "",
        nop_asal: "",
        kd_status_cabang: datObjekPajaks?.kdStatusCabang === 0 ? "Bukan Cabang" : "Cabang",
        no_persil: datObjekPajaks?.noPersil || "",
        longitude: 0,
        latitude: 0,
        geom: {
          type: "Point",
          coordinates: [0, 0],
        },
        jns_peruntukan: "",
        jns_asaltanah: "",
        user_pelayanan: "",
        kd_jns_pelayanan: "",
        kd_pelayanan: "",
        keterangan: "",
        nop_relasi: "",
        hotel: null,
        restoran: null,
        hiburan: null,
        reklame: null,
        ppj: null,
        mblbi: null,
        parkir: null,
        pat: null,
        walet: null,
        foto_op: [],
        log_by: "",
        persen_njkp: 0,
        is_pangan_ternak: false,
        is_verif: false,
        ket_verif: "",
        ket_pangan_ternak: "",
        kd_prov_baru: "",
        kd_kab_baru: "",
        kd_kec_baru: "",
        kd_kel_baru: "",
        kd_blok_baru: "",
        no_urut_baru: "",
        kd_jns_op_baru: "",
        nop_baru: "",
        dusun_op: "",
        no_identitas: datObjekPajaks?.subjekPajak?.subjekPajakId.trim() || "",
      },

      wajib_pajak: {
        jns_wp: "1",
        jns_identitas: "",
        nm_wp: datObjekPajaks?.subjekPajak?.nmWp || "",
        jns_kelamin_wp: "",
        tempat_lahir_wp: "",
        tanggal_lahir_wp: "",
        alamat_wp: datObjekPajaks?.subjekPajak?.jalanWp || "",
        blok_wp: datObjekPajaks?.subjekPajak?.blokKavNoWp || "",
        rt_wp: datObjekPajaks?.subjekPajak?.rtWp || "",
        rw_wp: datObjekPajaks?.subjekPajak?.rwWp || "",
        kd_provinsi: "",
        kd_kabupaten: "",
        kd_kecamatan: "",
        kd_kelurahan: "",
        telp_wp: "",
        kodepos_wp: "",
        email_wp: "",
        pekerjaan_wp: 0,
        npwp: datObjekPajaks?.subjekPajak?.npwp || "",
        nm_penanggung_jawab: "",
        posisi_penanggung_jawab: "",
        foto_wp: [],
        log_by: "",
        dusun_wp: "-",
        nop: "",
        no_identitas_lama: "",
        no_identitas: datObjekPajaks?.subjekPajak?.subjekPajakId.trim() || "",
      },

      dat_op_bangunan: datObjekPajaks?.datOpBangunans.map((bgn: any, index: number) => {
        return {
          no_bng: bgn.noBng || index + 1,
          nop: "",
          kd_jpb: bgn.kdJpb,
          no_formulir_lspop: "",
          bng_thn_dibangun: parseInt(bgn.thnDibangunBng) || 2000,
          bng_thn_renovasi: bgn.thnRenovasiBng || "",
          bng_luas: parseFloat(bgn.luasBng) || 0,
          bng_jml_lantai: 1,
          bng_kd_kondisi: getValueByKeys(kondisiBangunanOptions, bgn.kondisiBng) || "",
          bng_kd_konstruksi: getValueByKeys(konstruksiBangunanOptions, bgn.jnsKonstruksiBng) || "",
          bng_kd_atap: getValueByKeys(atapBangunanOptions, bgn.jnsAtapBng) || "",
          bng_kd_dinding: getValueByKeys(dindingBangunanOptions, bgn.kdDinding) || "",
          bng_kd_lantai: getValueByKeys(lantaiBangunanOptions, bgn.kdLantai) || "",
          bng_kd_langit_langit: getValueByKeys(langitLangitBangunanOptions, bgn.kdLangitLangit) || "",
          bng_nilai_sistem: null,
          bng_ins_transaksi: bgn.jnsTransaksiBng || "2",
          bng_keterangan: "",
          jpb2_kls: null,
          jpb3_tinggi_kolom: null,
          jpb3_lbr_bentang: null,
          jpb3_luas_mezzanine: null,
          jpb3_keliling_dinding: null,
          jpb3_daya_dukung_lantai: null,
          jpb9_kls: null,
          log_by: "",
        };
      }),
    };

    if (datObjekPajaks === null || datObjekPajaks === undefined) {
      return res.status(404).json({
        code: 404,
        message: `${nop} tidak ditemukan!!!`,
      });
    }

    return res.status(200).json({
      code: 200,
      data: filteredData,
    });
  } catch (error) {
    console.error("Error mengambil data objek pajak:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
