import { Request, Response } from "express";
import { AppDataSource } from "@/data-resource";
import { DatOpPajak } from "@/entity/datOpPajak";
import { v7 as uuidv7 } from "uuid";
import { DatOpBangunan } from "@/entity/datOpBangunan";
import { WajibPajak } from "@/entity/wajibPajak";
import { LogDatOpPajak } from "@/entity/logDatOpPajak";
import { LogDatOpBangunan } from "@/entity/logDatOpBangunan";
import { LogWajibPajak } from "@/entity/logWajibPajak";
import { formatNop } from "@/utils/formatNOP";

const datOpPajakRepository = AppDataSource.getRepository(DatOpPajak);
const datOpBangunanRepository = AppDataSource.getRepository(DatOpBangunan);
const wajibPajakRepository = AppDataSource.getRepository(WajibPajak);
const logDatOpPajakRepository = AppDataSource.getRepository(LogDatOpPajak);
const logDatOpBangunanRepository = AppDataSource.getRepository(LogDatOpBangunan);
const logWajibPajakRepository = AppDataSource.getRepository(LogWajibPajak);

// export const inputDatOpPajakUpdate = async (req: Request, res: Response) => {
//   try {
//     const { nop } = req.query;
//     const uuidUtama = uuidv7();
//     const tanggal = new Date();

//     if (!nop || typeof nop !== "string") {
//       return res.status(400).json({ code: 400, message: "NOP tidak valid" });
//     }

//     // 1️⃣ *Cek apakah dat_op_pajak sudah ada*
//     const existingOpPajak = await datOpPajakRepository.findOne({ where: { nop } });
//     const opPajakOperation = existingOpPajak ? "UPDATE" : "INSERT";

//     // 2️⃣ *Hitung total luas bangunan*
//     const existingBuildings = await datOpBangunanRepository.find({ where: { nop } });
//     const totalLuasExisting = existingBuildings.reduce((sum, bng) => sum + (bng.bng_luas || 0), 0);
//     const newBuildings = req.body.dat_op_bangunan || [];
//     const totalLuasNew = newBuildings.reduce((sum: any, bng: { bng_luas: any }) => sum + (bng.bng_luas || 0), 0);
//     const totalLuasBangunan = totalLuasExisting + totalLuasNew;

//     /// Dat_Op_Pajak
//     // 3️⃣ *Siapkan data untuk dat_op_pajak*
//     const requestData = {
//       ...req.body.dat_op_pajak,
//       kd_prov: nop.slice(0, 2),
//       kd_kab: nop.slice(2, 4),
//       kd_kec: nop.slice(4, 7),
//       kd_kel: nop.slice(7, 10),
//       kd_blok: nop.slice(10, 13),
//       no_urut: nop.slice(13, 17),
//       kd_jns_op: nop.slice(17, 18),
//       nop,
//       nop_join: formatNop(nop),
//       uuid: existingOpPajak?.uuid || uuidUtama, // Gunakan UUID lama jika update
//       total_luas_bng: totalLuasBangunan, // Update total luas bangunan
//       tgl_pelayanan: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.tgl_pelayanan,
//       log_at: opPajakOperation === "INSERT" ? tanggal : existingOpPajak?.log_at,
//     };

//     // 4️⃣ *Simpan data ke dat_op_pajak*
//     await datOpPajakRepository.save(requestData);

//     // 5️⃣ *Simpan log ke log_dat_op_pajak*
//     await logDatOpPajakRepository.insert({
//       ...requestData,
//       log_id: uuidv7(),
//       log_operation: opPajakOperation, // INSERT atau UPDATE
//       log_stamp: tanggal,
//     });

//     /// Wajib_Pajak
//     // 6️⃣ *Simpan atau update data wajib_pajak jika ada*
//     if (req.body.wajib_pajak) {
//       const existingWajibPajak = await wajibPajakRepository.findOne({
//         where: { no_identitas: req.body.wajib_pajak.no_identitas },
//       });

//       const wajibPajakOperation = existingWajibPajak ? "UPDATE" : "INSERT";

//       const requestDataWajibPajak = {
//         ...req.body.wajib_pajak,
//         nop,
//         log_by: existingOpPajak?.log_by || req.body.dat_op_pajak.log_by,
//         log_at: wajibPajakOperation === "INSERT" ? tanggal : existingWajibPajak?.log_at,
//       };

//       await wajibPajakRepository.upsert(requestDataWajibPajak, ["no_identitas"]);

//       // Simpan log wajib_pajak
//       await logWajibPajakRepository.insert({
//         ...requestDataWajibPajak,
//         log_id: uuidv7(),
//         log_operation: wajibPajakOperation,
//         log_stamp: tanggal,
//       });
//     }

//     /// Dat_Op_Bangunan
//     // 7️⃣ *Simpan atau update data bangunan*
//     for (const bng of newBuildings) {
//       const existingBuilding = await datOpBangunanRepository.findOne({
//         where: { nop, no_bng: bng.no_bng },
//       });

//       const bangunanOperation = existingBuilding ? "UPDATE" : "INSERT";

//       const bangunanData = {
//         ...bng,
//         kd_prov: nop.slice(0, 2),
//         kd_kab: nop.slice(2, 4),
//         kd_kec: nop.slice(4, 7),
//         kd_kel: nop.slice(7, 10),
//         kd_blok: nop.slice(10, 13),
//         no_urut: nop.slice(13, 17),
//         kd_jns_op: nop.slice(17, 18),
//         nop,
//         log_by: existingOpPajak?.log_by || req.body.dat_op_pajak.log_by,
//         log_at: bangunanOperation === "INSERT" ? tanggal : existingBuilding?.log_at,
//       };

//       await datOpBangunanRepository.upsert(bangunanData, ["nop", "no_bng"]);

//       // Simpan log bangunan
//       await logDatOpBangunanRepository.insert({
//         ...bangunanData,
//         log_id: uuidv7(),
//         log_operation: bangunanOperation,
//         log_stamp: tanggal,
//       });
//     }

//     return res.status(200).json({
//       code: 200,
//       // data: uuidUtama,
//       message: "Data berhasil ditambahkan atau diperbarui",
//     });
//   } catch (error) {
//     console.error("Error saat menyimpan data objek pajak:", error);
//     return res.status(500).json({ code: 500, message: "Internal server error" });
//   }
// };

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
      uuid: existingOpPajak?.uuid || uuidUtama,
      total_luas_bng: totalLuasBangunan,
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
    const data = await datOpPajakRepository.find();

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

export const getDatOpPajakUpdateByNOP = async (req: Request, res: Response) => {
  try {
    const { nop } = req.query;
    if (!nop || typeof nop !== "string") {
      return res.status(400).json({ code: 400, message: "NOP tidak valid" });
    }

    const data = await datOpPajakRepository.findOne({
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
