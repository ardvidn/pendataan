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

export const inputDatOpPajakHapus = async (req: Request, res: Response) => {
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

    // 2️⃣ Siapkan data untuk dat_op_pajak
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
      jns_asaltanah: getKeyByContainsValue(jns_asaltanahOptions, req.body.dat_op_pajak.jns_asaltanah),
      rw_op: req.body.dat_op_pajak.rw_op.trim(),
      kd_prov_baru: "",
      kd_kab_baru: "",
      kd_kec_baru: "",
      kd_kel_baru: "",
      kd_blok_baru: "",
      kd_jns_op_baru: "",
      tgl_pelayanan: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.tgl_pelayanan,
      log_at: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.log_at,
    };

    // 3️⃣ Simpan data ke dat_op_pajak
    await queryRunner.manager.save(DatOpPajak, requestData);

    // 4️⃣ Simpan log ke log_dat_op_pajak
    await queryRunner.manager.insert(LogDatOpPajak, {
      ...requestData,
      log_id: uuidv7(),
      log_operation: opPajakOperation,
      log_stamp: tanggal,
    });

    // 5️⃣ Commit transaksi jika semua berhasil
    await queryRunner.commitTransaction();
    return res.status(200).json({ code: 200, message: "Data objek pajak berhasil disimpan/diperbarui" });
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error("Error saat menyimpan data objek pajak:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  } finally {
    await queryRunner.release();
  }
};
