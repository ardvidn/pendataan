import { Request, Response } from "express";
import { RefKecamatan } from "../entity/RefKecamatan";
import { RefKelurahan } from "../entity/RefKelurahan";
import { AppDataSource } from "../data-resource";
import { DatPetaBlok } from "../entity/DatPetaBlok";

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
    const kodeKelurahanRepo = AppDataSource.getRepository(RefKelurahan);
    const dataKodeKelurahan = await kodeKelurahanRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeKelurahan,
      message: "Data kode Kelurahan berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode Kelurahan:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getKodeBlok = async (req: Request, res: Response) => {
  try {
    const kodeBlokRepo = AppDataSource.getRepository(DatPetaBlok);
    const dataKodeBlok = await kodeBlokRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeBlok,
      message: "Data kode Blok berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode Blok:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
