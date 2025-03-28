import { Request, Response } from "express";
import { DatObjekPajak } from "../entity/DatObjekPajak";
import { AppDataSource } from "@/data-resource";

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
    const datObjekPajaks = await datObjekPajakRepository.find({
      where: {
        kdPropinsi: nop.slice(0, 2),
        kdDati2: nop.slice(2, 4),
        kdKecamatan: nop.slice(4, 7),
        kdKelurahan: nop.slice(7, 10),
        kdBlok: nop.slice(10, 13),
        noUrut: nop.slice(13, 17),
        kdJnsOp: nop.slice(17, 18),
      },
      select: {
        kdPropinsi: true,
        kdDati2: true,
        kdKecamatan: true,
        kdKelurahan: true,
        kdBlok: true,
        noUrut: true,
        kdJnsOp: true,
        jalanOp: true,
        rtOp: true,
        rwOp: true,
        totalLuasBumi: true,
        totalLuasBng: true,
        njopBumi: true,
        njopBng: true,
        subjekPajakId: true,
        statusPetaOp: true,
        tglPendataanOp: true,
        tglPerekamanOp: true,
      },
      relations: {
        subjekPajak: true, // Tetap diambil jika perlu
        datOpBangunans: true, // Tambahkan relasi
        datOpBumis: true, // Tambahkan relasi
      },
    });

    // Filter hanya data yang diperlukan dari `datOpBangunans` dan `datOpBumis`
    const filteredData = datObjekPajaks.map((op) => ({
      ...op,
      datOpBangunans: op.datOpBangunans?.map((bng) => ({
        noBng: bng.noBng,
        kdJpb: bng.kdJpb,
        luasBng: bng.luasBng,
        jmlLantaiBng: bng.jmlLantaiBng,
        thnDibangunBng: bng.thnDibangunBng,
      })),
      datOpBumis: op.datOpBumis?.map((bumi) => ({
        noBumi: bumi.noBumi,
        kdZnt: bumi.kdZnt,
        luasBumi: bumi.luasBumi,
        jnsBumi: bumi.jnsBumi,
      })),
    }));

    if (datObjekPajaks.length === 0) {
      return res.status(404).json({
        code: 404,
        message: "nop tidak ditemukan!!!",
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
