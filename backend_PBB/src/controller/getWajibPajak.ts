import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { DatSubjekPajak } from "../entity/DatSubjekPajak";
import { Like } from "typeorm";

// TODO: Implement debouncing on the frontend to limit the number of requests.

export const getWajibPajak = async (req: Request, res: Response) => {
  try {
    const { noIdentitas } = req.query;
    const wajibPajakRepo = AppDataSource.getRepository(DatSubjekPajak);
    const dataWajibPajak = await wajibPajakRepo.find({
      where: {
        subjekPajakId: Like(`%${noIdentitas?.toString()}%`),
      },
    });

    const filtered = dataWajibPajak.map((item) => ({
      id: item.subjekPajakId.replace(/\D/g, ""),
      name: item.nmWp,
    }));

    if (filtered.length === 0) {
      return res.status(200).json({
        code: 404,
        data: filtered,
        message: "Nomor identitas tidak ditemukan",
      });
    }

    return res.status(200).json({
      code: 200,
      data: filtered,
      message: "Data wajib pajak berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data wajib pajak:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
