import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { DatObjekPajak } from "../entity/DatObjekPajak";

const datObjekPajakRepository = AppDataSource.getRepository(DatObjekPajak);

export const getUrutOpBaru = async (req: Request, res: Response) => {
  try {
    const { kd_kecamatan, kd_kelurahan, kd_blok } = req.query;

    const NOPTerakhir = await datObjekPajakRepository
      .createQueryBuilder("op")
      .select("MAX(CAST(op.no_urut AS INTEGER))", "max")
      .where("op.kd_kecamatan = :kd_kecamatan", { kd_kecamatan })
      .andWhere("op.kd_kelurahan = :kd_kelurahan", { kd_kelurahan })
      .andWhere("op.kd_blok = :kd_blok", { kd_blok })
      .getRawOne();

    // if (NOPTerakhir.max === null) {
    //   return res.status(404).json({
    //     code: 404,
    //     message: `Kecamatan/Kelurahan/Blok = ${kd_kecamatan}.${kd_kelurahan}.${kd_blok} tidak ditemukan!!!`,
    //   });
    // }

    return res.status(200).json({
      code: 200,
      data: NOPTerakhir.max || parseInt("0"),
      message: "berhasil",
    });
  } catch (error) {
    console.error("Error mendaftar akun:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};
