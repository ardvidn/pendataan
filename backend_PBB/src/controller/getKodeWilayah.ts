import { Request, Response } from "express";
import { RefKecamatan } from "../entity/RefKecamatan";
import { RefKelurahan } from "../entity/RefKelurahan";
import { AppDataSource } from "@/data-resource";

export const getKodeKecamatan = async (req: Request, res: Response) => {
  try {
    const kodeKecamatanRepo = AppDataSource.getRepository(RefKecamatan);
    const dataKodeKecamatan = await kodeKecamatanRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeKecamatan,
      message: "Data kode kecamatan berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode kecamatan:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getKodeKelurahan = async (req: Request, res: Response) => {
  try {
    const kodeKecamatanRepo = AppDataSource.getRepository(RefKelurahan);
    const dataKodeKecamatan = await kodeKecamatanRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeKecamatan,
      message: "Data kode kecamatan berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode kecamatan:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
