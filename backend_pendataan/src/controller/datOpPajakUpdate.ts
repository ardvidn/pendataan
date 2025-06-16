import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { DatOpPajak } from "../entity/datOpPajak";
import { v7 as uuidv7 } from "uuid";
import { DatOpBangunan } from "../entity/datOpBangunan";
import { WajibPajak } from "../entity/wajibPajak";
import { LogDatOpPajak } from "../entity/logDatOpPajak";
import { LogDatOpBangunan } from "../entity/logDatOpBangunan";
import { LogWajibPajak } from "../entity/logWajibPajak";
import { formatNop } from "../utils/formatNOP";
import {
  atapBangunanOptions,
  dindingBangunanOptions,
  getKeyByContainsValue,
  getValueByKeys,
  jns_asaltanahOptions,
  jns_peruntukanOptions,
  jns_wpOptions,
  kodeJenisPelayanan,
  kodeJpb,
  kondisiBangunanOptions,
  konstruksiBangunanOptions,
  langitLangitBangunanOptions,
  lantaiBangunanOptions,
  pekerjaanOptions,
} from "../utils/labelData";
import { kodeProvinsi } from "../entity/kodeProvinsi";
import { kodeKabupaten } from "../entity/kodeKabupaten";
import { kodeKecamatan } from "../entity/kodeKecamatan";
import { kodeKelurahan } from "../entity/kodeKelurahan";

const datOpPajakRepository = AppDataSource.getRepository(DatOpPajak);
const datOpBangunanRepository = AppDataSource.getRepository(DatOpBangunan);
const wajibPajakRepository = AppDataSource.getRepository(WajibPajak);
const logDatOpPajakRepository = AppDataSource.getRepository(LogDatOpPajak);
const logDatOpBangunanRepository = AppDataSource.getRepository(LogDatOpBangunan);
const logWajibPajakRepository = AppDataSource.getRepository(LogWajibPajak);
const kodeProvinsiRepository = AppDataSource.getRepository(kodeProvinsi);
const kodeKabupatenRepository = AppDataSource.getRepository(kodeKabupaten);
const kodeKecamatanRepository = AppDataSource.getRepository(kodeKecamatan);
const kodeKelurahanRepository = AppDataSource.getRepository(kodeKelurahan);

export const inputDatOpPajakUpdate = async (req: Request, res: Response) => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const { nop } = req.query;
    const uuidUtama = uuidv7();
    const tanggal = new Date();

    if (!nop || typeof nop !== "string") {
      return res.status(400).json({ code: 400, message: "NOP tidak valid" });
    }

    // 1️⃣ Cek apakah dat_op_pajak sudah ada
    const existingOpPajak = await queryRunner.manager.findOne(DatOpPajak, { where: { nop } });
    const opPajakOperation = existingOpPajak ? "UPDATE" : "INSERT";

    // 2️⃣ Hitung total luas bangunan
    const existingBuildings = await queryRunner.manager.find(DatOpBangunan, { where: { nop } });
    const totalLuasExisting = existingBuildings.reduce((sum, bng) => sum + (bng.bng_luas || 0), 0);
    const newBuildings = req.body.dat_op_bangunan || [];
    const totalLuasNew = newBuildings.reduce((sum: any, bng: { bng_luas: any }) => sum + (bng.bng_luas || 0), 0);
    const totalLuasBangunan = totalLuasExisting + totalLuasNew;

    // 3️⃣ Siapkan data untuk dat_op_pajak
    const requestData = {
      ...req.body.dat_op_pajak,
      kd_prov: nop.slice(0, 2),
      kd_kab: nop.slice(2, 4),
      kd_kec: nop.slice(4, 7),
      kd_kel: nop.slice(7, 10),
      kd_blok: nop.slice(10, 13),
      no_urut: nop.slice(13, 17),
      kd_jns_op: nop.slice(17, 18),
      nop,
      nop_join: formatNop(nop),
      geom: {
        type: "Point",
        coordinates: [parseFloat(req.body.dat_op_pajak.longitude), parseFloat(req.body.dat_op_pajak.latitude)],
      },
      uuid: existingOpPajak?.uuid || uuidUtama,
      jns_peruntukan: getKeyByContainsValue(jns_peruntukanOptions, req.body.dat_op_pajak.jns_peruntukan),
      // jns_asaltanah: getKeyByContainsValue(jns_asaltanahOptions, req.body.dat_op_pajak.jns_asaltanah),
      rw_op: req.body.dat_op_pajak.rw_op.trim(),
      // kd_status_wp: getKeyByContainsValue(jns_wpOptions, req.body.dat_op_pajak.kd_status_wp.kode),
      kd_prov_baru: "",
      kd_kab_baru: "",
      kd_kec_baru: "",
      kd_kel_baru: "",
      kd_blok_baru: "",
      kd_jns_op_baru: "",
      tgl_pelayanan: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.tgl_pelayanan,
      log_at: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.log_at,
    };

    // 4️⃣ Simpan data ke dat_op_pajak
    await queryRunner.manager.save(DatOpPajak, requestData);

    // 5️⃣ Simpan log ke log_dat_op_pajak
    await queryRunner.manager.insert(LogDatOpPajak, {
      ...requestData,
      log_id: uuidv7(),
      log_operation: opPajakOperation,
      log_stamp: tanggal,
    });

    // 6️⃣ Simpan atau update data wajib_pajak jika ada
    if (req.body.wajib_pajak) {
      const existingWajibPajak = await queryRunner.manager.findOne(WajibPajak, {
        where: { no_identitas: req.body.dat_op_pajak.no_identitas },
      });

      const wajibPajakOperation = existingWajibPajak ? "UPDATE" : "INSERT";

      const requestDataWajibPajak = {
        ...req.body.wajib_pajak,
        nop,
        kd_provinsi: req.body.wajib_pajak.kd_provinsi.split("-")[0],
        kd_kabupaten: req.body.wajib_pajak.kd_kabupaten.split("-")[0],
        kd_kecamatan: req.body.wajib_pajak.kd_kecamatan.split("-")[0],
        kd_kelurahan: req.body.wajib_pajak.kd_kelurahan.split("-")[0],
        no_identitas: req.body.dat_op_pajak.no_identitas,
        log_by: existingOpPajak?.log_by || req.body.dat_op_pajak.log_by,
        log_at: wajibPajakOperation === "INSERT" ? tanggal : existingWajibPajak?.log_at,
      };

      await queryRunner.manager.upsert(WajibPajak, requestDataWajibPajak, ["no_identitas"]);

      await queryRunner.manager.insert(LogWajibPajak, {
        ...requestDataWajibPajak,
        log_id: uuidv7(),
        log_operation: wajibPajakOperation,
        log_stamp: tanggal,
      });
    }

    // 🆕 Bandingkan dan hapus bangunan yang tidak ada dalam data baru
    const newNoBngSet = new Set(newBuildings.map((b: any) => parseInt(b.no_bng)));

    // Filter bangunan lama yang tidak ada di data baru
    const deletedBuildings = existingBuildings.filter((b) => !newNoBngSet.has(b.no_bng));

    for (const deletedBng of deletedBuildings) {
      // Hapus dari dat_op_bangunan
      await queryRunner.manager.delete(DatOpBangunan, {
        nop,
        no_bng: deletedBng.no_bng,
      });

      // Simpan ke log_dat_op_bangunan
      await queryRunner.manager.insert(LogDatOpBangunan, {
        ...deletedBng,
        log_id: uuidv7(),
        log_operation: "DELETE",
        log_stamp: tanggal,
      });
    }

    // 7️⃣ Simpan atau update data bangunan
    for (const bng of newBuildings) {
      const existingBuilding = await queryRunner.manager.findOne(DatOpBangunan, {
        where: { nop, no_bng: bng.no_bng },
      });

      const bangunanOperation = existingBuilding ? "UPDATE" : "INSERT";

      const bangunanData = {
        ...bng,
        kd_prov: nop.slice(0, 2),
        kd_kab: nop.slice(2, 4),
        kd_kec: nop.slice(4, 7),
        kd_kel: nop.slice(7, 10),
        kd_blok: nop.slice(10, 13),
        no_urut: nop.slice(13, 17),
        kd_jns_op: nop.slice(17, 18),
        nop,
        no_formulir_lspop: "",
        bng_thn_direnovasi: "",
        no_bng: parseInt(bng.no_bng),
        kd_jpb: bng.kd_jpb.split(" - ")[0],
        bng_kd_kondisi: getKeyByContainsValue(kondisiBangunanOptions, bng.bng_kd_kondisi),
        bng_kd_konstruksi: getKeyByContainsValue(konstruksiBangunanOptions, bng.bng_kd_konstruksi),
        bng_kd_atap: getKeyByContainsValue(atapBangunanOptions, bng.bng_kd_atap),
        bng_kd_dinding: getKeyByContainsValue(dindingBangunanOptions, bng.bng_kd_dinding),
        bng_kd_lantai: getKeyByContainsValue(lantaiBangunanOptions, bng.bng_kd_lantai),
        bng_kd_langit_langit: getKeyByContainsValue(langitLangitBangunanOptions, bng.bng_kd_langit_langit),
        log_by: existingOpPajak?.log_by || req.body.dat_op_pajak.log_by,
        log_at: bangunanOperation === "INSERT" ? tanggal : existingBuilding?.log_at,
      };

      await queryRunner.manager.upsert(DatOpBangunan, bangunanData, ["nop", "no_bng"]);

      await queryRunner.manager.insert(LogDatOpBangunan, {
        ...bangunanData,
        log_id: uuidv7(),
        log_operation: bangunanOperation,
        log_stamp: tanggal,
      });
    }

    // 8️⃣ Commit transaksi jika semua berhasil
    await queryRunner.commitTransaction();
    return res.status(200).json({ code: 200, message: "Data berhasil ditambahkan atau diperbarui" });
  } catch (error) {
    // Jika ada error, rollback transaksi
    await queryRunner.rollbackTransaction();
    console.error("Error saat menyimpan data objek pajak:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  } finally {
    await queryRunner.release();
  }
};

export const getDatOpPajakUpdate = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;
    const pelayanan = String(req.query.pel);

    const [data, total] = await Promise.all([
      datOpPajakRepository.find({
        where: {
          kd_jns_pelayanan: pelayanan,
        },
        skip,
        take: limit,
        order: { tgl_pelayanan: "DESC" }, // Optional: add sorting
      }),
      datOpPajakRepository.count({
        where: {
          kd_jns_pelayanan: pelayanan,
        },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return res.status(200).json({
      code: 200,
      data,
      total,
      totalPages,
      currentPage: page,
      message: "Berhasil mengambil data",
    });
  } catch (error) {
    console.error("Error saat mengambil data objek pajak:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const getDatOpPajakUpdateByNOP = async (req: Request, res: Response) => {
  try {
    const { nop } = req.query;
    if (!nop || typeof nop !== "string") {
      return res.status(400).json({ code: 400, message: "NOP tidak valid" });
    }

    const datOpPajak = await datOpPajakRepository.findOne({
      where: {
        kd_prov: nop.slice(0, 2),
        kd_kab: nop.slice(2, 4),
        kd_kec: nop.slice(4, 7),
        kd_kel: nop.slice(7, 10),
        kd_blok: nop.slice(10, 13),
        no_urut: nop.slice(13, 17),
        kd_jns_op: nop.slice(17, 18),
      },
    });

    if (datOpPajak === null) {
      return res.status(404).json({
        code: 404,
        message: `${nop} belum terdaftar`,
      });
    }

    const datOpBangunan = await datOpBangunanRepository.find({
      where: {
        kd_prov: nop.slice(0, 2),
        kd_kab: nop.slice(2, 4),
        kd_kec: nop.slice(4, 7),
        kd_kel: nop.slice(7, 10),
        kd_blok: nop.slice(10, 13),
        no_urut: nop.slice(13, 17),
        kd_jns_op: nop.slice(17, 18),
      },
    });

    const datWajibPajak = await wajibPajakRepository.findOne({
      where: {
        nop,
      },
    });

    const kodeProvinsidanNama = await kodeProvinsiRepository.findOne({
      where: {
        KD_PROV: datWajibPajak?.kd_provinsi,
      },
    });

    const kodeKabupatendanNama = await kodeKabupatenRepository.findOne({
      where: {
        KD_PROV: datWajibPajak?.kd_provinsi,
        KD_KAB: datWajibPajak?.kd_kabupaten,
      },
    });

    const kodeKecamatandanNama = await kodeKecamatanRepository.findOne({
      where: {
        KD_PROV: datWajibPajak?.kd_provinsi,
        KD_KAB: datWajibPajak?.kd_kabupaten,
        KD_KEC: datWajibPajak?.kd_kecamatan.trim() || datWajibPajak?.kd_kecamatan,
      },
    });

    const kodeKelurahandanNama = await kodeKelurahanRepository.findOne({
      where: {
        KD_PROV: datWajibPajak?.kd_provinsi,
        KD_KAB: datWajibPajak?.kd_kabupaten,
        KD_KEC: datWajibPajak?.kd_kecamatan.trim() || datWajibPajak?.kd_kecamatan,
        KD_KEL: datWajibPajak?.kd_kelurahan.trim() || datWajibPajak?.kd_kelurahan,
      },
    });

    const data = {
      dat_op_pajak: {
        nop: datOpPajak?.nop,
        nop_join: datOpPajak?.nop_join,
        jalan_op: datOpPajak?.jalan_op,
        total_luas_bumi: datOpPajak?.total_luas_bumi,
        total_luas_bng: datOpPajak?.total_luas_bng,
        blok_kav_no_op: datOpPajak?.blok_kav_no_op,
        rw_op: datOpPajak?.rw_op,
        rt_op: datOpPajak?.rt_op,
        kd_status_wp: datOpPajak?.kd_status_wp,
        kd_znt: datOpPajak?.kd_znt,
        jns_bumi: datOpPajak?.jns_bumi,
        jns_transaksi_op: datOpPajak?.jns_transaksi_op,
        no_sertifikat: datOpPajak?.no_sertifikat,
        tgl_sertifikat: datOpPajak?.tgl_sertifikat,
        nop_asal: datOpPajak?.nop_asal.trim() || datOpPajak?.nop_asal,
        kd_status_cabang: datOpPajak?.kd_status_cabang === false ? "Bukan Cabang" : "Cabang",
        no_persil: datOpPajak?.no_persil,
        longitude: datOpPajak?.longitude,
        latitude: datOpPajak?.latitude,
        geom: {
          type: "Point",
          coordinates: [datOpPajak?.latitude, datOpPajak?.longitude],
        },
        jns_peruntukan: getValueByKeys(jns_peruntukanOptions, datOpPajak?.jns_peruntukan),
        jns_asaltanah: getValueByKeys(jns_asaltanahOptions, datOpPajak?.jns_asaltanah),
        user_pelayanan: datOpPajak?.user_pelayanan,
        kd_jns_pelayanan: datOpPajak?.kd_jns_pelayanan,
        kd_pelayanan: datOpPajak?.kd_pelayanan,
        keterangan: datOpPajak?.keterangan,
        nop_relasi: datOpPajak?.nop_relasi.trim() || datOpPajak?.nop_relasi,
        hotel: datOpPajak?.hotel,
        restoran: datOpPajak?.restoran,
        hiburan: datOpPajak?.hiburan,
        reklame: datOpPajak?.reklame,
        ppj: datOpPajak?.ppj,
        mblbi: datOpPajak?.mblbi,
        parkir: datOpPajak?.parkir,
        pat: datOpPajak?.pat,
        walet: datOpPajak?.walet,
        foto_op: datOpPajak?.foto_op,
        log_by: datOpPajak?.log_by,
        persen_njkp: datOpPajak?.persen_njkp,
        is_pangan_ternak: datOpPajak?.is_pangan_ternak,
        is_verif: datOpPajak?.is_verif,
        ket_verif: datOpPajak?.ket_verif,
        ket_pangan_ternak: datOpPajak?.ket_pangan_ternak,
        kd_prov_baru: datOpPajak?.kd_prov_baru,
        kd_kab_baru: datOpPajak?.kd_kab_baru,
        kd_kec_baru: datOpPajak?.kd_kec_baru,
        kd_kel_baru: datOpPajak?.kd_kel_baru,
        kd_blok_baru: datOpPajak?.kd_blok_baru,
        no_urut_baru: datOpPajak?.no_urut_baru,
        kd_jns_op_baru: datOpPajak?.kd_jns_op_baru,
        nop_baru: datOpPajak?.nop_baru.trim() || datOpPajak?.nop_baru,
        dusun_op: datOpPajak?.dusun_op.trim() || datOpPajak?.dusun_op,
        no_identitas: datOpPajak?.no_identitas.trim() || datOpPajak?.no_identitas,
        jenis_pajak: datOpPajak.jenis_pajak,
      },
      wajib_pajak: {
        jns_wp: datWajibPajak?.jns_wp,
        jns_identitas: datWajibPajak?.jns_identitas,
        nm_wp: datWajibPajak?.nm_wp,
        jns_kelamin_wp: datWajibPajak?.jns_kelamin_wp,
        tempat_lahir_wp: datWajibPajak?.tempat_lahir_wp,
        tanggal_lahir_wp: datWajibPajak?.tanggal_lahir_wp,
        alamat_wp: datWajibPajak?.alamat_wp,
        blok_wp: datWajibPajak?.blok_wp,
        rt_wp: datWajibPajak?.rt_wp,
        rw_wp: datWajibPajak?.rw_wp,
        kd_provinsi: `${kodeProvinsidanNama?.KD_PROV} - ${kodeProvinsidanNama?.NM_PROV}`,
        kd_kabupaten: `${kodeKabupatendanNama?.KD_KAB} - ${kodeKabupatendanNama?.NM_KAB}`,
        kd_kecamatan: `${kodeKecamatandanNama?.KD_KEC} - ${kodeKecamatandanNama?.NM_KEC}`,
        kd_kelurahan: `${kodeKelurahandanNama?.KD_KEL} - ${kodeKelurahandanNama?.NM_KEL}`,
        telp_wp: datWajibPajak?.telp_wp,
        kodepos_wp: datWajibPajak?.kodepos_wp,
        email_wp: datWajibPajak?.email_wp,
        pekerjaan_wp: getValueByKeys(pekerjaanOptions, datWajibPajak?.pekerjaan_wp),
        npwp: datWajibPajak?.npwp,
        nm_penanggung_jawab: datWajibPajak?.nm_penanggung_jawab,
        posisi_penanggung_jawab: datWajibPajak?.posisi_penanggung_jawab,
        foto_wp: datWajibPajak?.foto_wp,
        log_by: datWajibPajak?.log_by,
        dusun_wp: datWajibPajak?.dusun_wp,
        nop: datWajibPajak?.nop,
        no_identitas_lama: datWajibPajak?.no_identitas_lama,
        no_identitas: datWajibPajak?.no_identitas,
      },
      dat_op_bangunan: datOpBangunan.map((bgn) => {
        return {
          no_bng: bgn.no_bng,
          nop: bgn.nop,
          kd_jpb: bgn.kd_jpb,
          no_formulir_lspop: bgn.no_formulir_lspop,
          bng_thn_dibangun: bgn.bng_thn_dibangun,
          bng_thn_renovasi: bgn.bng_thn_renovasi,
          bng_luas: bgn.bng_luas,
          bng_jml_lantai: bgn.bng_jml_lantai,
          bng_kd_kondisi: getValueByKeys(kondisiBangunanOptions, bgn.bng_kd_kondisi),
          bng_kd_konstruksi: getValueByKeys(konstruksiBangunanOptions, bgn.bng_kd_konstruksi),
          bng_kd_atap: getValueByKeys(atapBangunanOptions, bgn.bng_kd_atap),
          bng_kd_dinding: getValueByKeys(dindingBangunanOptions, bgn.bng_kd_dinding),
          bng_kd_lantai: getValueByKeys(lantaiBangunanOptions, bgn.bng_kd_lantai),
          bng_kd_langit_langit: getValueByKeys(langitLangitBangunanOptions, bgn.bng_kd_langit_langit),
          bng_nilai_sistem: null,
          bng_ins_transaksi: bgn.bng_ins_transaksi,
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

    return res.status(200).json({
      code: 200,
      data,
      message: "berhasil mengambil data",
    });
  } catch (error) {
    console.error("Error saat mengambil data objek pajak:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const getDatOpPajakUpdateBySearch = async (req: Request, res: Response) => {
  try {
    const { nop } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;
    const pelayanan = String(req.query.pel);

    // Validate nop is a string
    if (!nop || typeof nop !== "string") {
      return res.status(400).json({ code: 400, message: "Parameter NOP diperlukan dan harus berupa string" });
    }

    // Validate NOP length (should be 18 characters without dots or 24 with dots)
    const cleanNop = nop.replace(/\./g, "");
    if (cleanNop.length !== 18) {
      return res.status(400).json({ code: 400, message: "Format NOP tidak valid. Harus 18 digit setelah menghilangkan titik" });
    }

    const [data, total] = await Promise.all([
      datOpPajakRepository.find({
        where: {
          kd_prov: nop.slice(0, 2),
          kd_kab: nop.slice(2, 4),
          kd_kec: nop.slice(4, 7),
          kd_kel: nop.slice(7, 10),
          kd_blok: nop.slice(10, 13),
          no_urut: nop.slice(13, 17),
          kd_jns_op: nop.slice(17, 18),
          kd_jns_pelayanan: pelayanan,
        },
        skip,
        take: limit,
      }),
      datOpPajakRepository.count({
        where: {
          kd_prov: nop.slice(0, 2),
          kd_kab: nop.slice(2, 4),
          kd_kec: nop.slice(4, 7),
          kd_kel: nop.slice(7, 10),
          kd_blok: nop.slice(10, 13),
          no_urut: nop.slice(13, 17),
          kd_jns_op: nop.slice(17, 18),
          kd_jns_pelayanan: pelayanan,
        },
      }),
    ]);

    const dataKodeJenisPelayanan = await datOpPajakRepository.find({
      where: {
        kd_prov: nop.slice(0, 2),
        kd_kab: nop.slice(2, 4),
        kd_kec: nop.slice(4, 7),
        kd_kel: nop.slice(7, 10),
        kd_blok: nop.slice(10, 13),
        no_urut: nop.slice(13, 17),
        kd_jns_op: nop.slice(17, 18),
      },
    });

    const totalPages = Math.ceil(total / limit);

    if (dataKodeJenisPelayanan.length === 0) {
      return res.status(404).json({
        code: 404,
        message: `${nop} belum terdaftar sebagai ${kodeJenisPelayanan[pelayanan as keyof typeof kodeJenisPelayanan]}`,
      });
    }

    if (dataKodeJenisPelayanan[0].kd_jns_pelayanan !== pelayanan) {
      return res.status(404).json({
        code: 404,
        message: `NOP sudah terdaftar sebagai ${kodeJenisPelayanan[dataKodeJenisPelayanan[0].kd_jns_pelayanan as keyof typeof kodeJenisPelayanan]}`,
      });
    }

    return res.status(200).json({
      code: 200,
      data,
      total,
      totalPages,
      currentPage: page,
      message: "Berhasil mengambil data",
    });
  } catch (error) {
    console.error("Error saat mengambil data objek pajak:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const deleteOpPajak = async (req: Request, res: Response) => {
  const { nop } = req.params;

  try {
    const opData = await datOpPajakRepository.findOne({ where: { nop } });
    const bangunanData = await datOpBangunanRepository.find({ where: { nop } });
    const wpData = await wajibPajakRepository.findOne({ where: { nop } });

    if (!opData) {
      return res.status(404).json({ code: 404, message: "Data OP tidak ditemukan" });
    }

    // Simpan log dat_op_pajak
    await logDatOpPajakRepository.save({
      ...opData,
      log_id: uuidv7(),
      log_operation: "DELETE",
      log_stamp: new Date(),
    });

    // Simpan log dat_op_bangunan (jika ada)
    for (const bangunan of bangunanData) {
      await logDatOpBangunanRepository.save({
        ...bangunan,
        log_id: uuidv7(),
        log_operation: "DELETE",
        log_stamp: new Date(),
      });
    }

    // Simpan log wajib_pajak (jika ada)
    if (wpData) {
      await logWajibPajakRepository.save({
        ...wpData,
        log_id: uuidv7(),
        log_operation: "DELETE",
        log_stamp: new Date(),
      });
    }

    // Hapus data asli
    await datOpBangunanRepository.delete({ nop }); // hapus banyak
    await datOpPajakRepository.delete({ nop });
    if (wpData) await wajibPajakRepository.delete({ nop });

    return res.status(200).json({
      code: 200,
      message: `Data dengan NOP ${nop} berhasil dihapus dan dicatat ke log.`,
    });
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const checkDatOpPajakExist = async (req: Request, res: Response) => {
  try {
    const { nop } = req.params;
    const pelayanan = String(req.query.pel);

    const checkData = await datOpPajakRepository.findOne({ where: { nop } });

    if (checkData === null) {
      return res.status(200).json({
        code: 280,
        data: checkData,
        message: `NOP belum terdaftar sebagai ${kodeJenisPelayanan[pelayanan as keyof typeof kodeJenisPelayanan]}`,
      });
    }
    if (checkData && checkData?.kd_jns_pelayanan !== pelayanan) {
      return res.status(404).json({
        code: 404,
        message: `NOP sudah terdaftar sebagai ${kodeJenisPelayanan[checkData?.kd_jns_pelayanan as keyof typeof kodeJenisPelayanan]}`,
      });
    }

    return res.status(200).json({
      code: 290,
      data: checkData,
      message: "NOP sudah terdaftar sebagai OP Update",
    });
  } catch (error) {
    console.error("Gagal mengecek data:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};
