import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { kodeKecamatan } from "../entity/kodeKecamatan";
import { kodeKelurahan } from "../entity/kodeKelurahan";
import { kodeKabupaten } from "../entity/kodeKabupaten";
import { kodeProvinsi } from "../entity/kodeProvinsi";

export const getKodeProvinsi = async (req: Request, res: Response) => {
  try {
    const kodeProvinsiRepo = AppDataSource.getRepository(kodeProvinsi);
    const dataKodeProvinsi = await kodeProvinsiRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeProvinsi,
      message: "Data kode Provinsi berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode Provinsi:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getKodeKabupaten = async (req: Request, res: Response) => {
  try {
    const kodeKabupatenRepo = AppDataSource.getRepository(kodeKabupaten);
    const dataKodeKabupaten = await kodeKabupatenRepo.find();

    return res.status(200).json({
      code: 200,
      data: dataKodeKabupaten,
      message: "Data kode Kabupaten berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode Kabupaten:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getKodeKecamatan = async (req: Request, res: Response) => {
  try {
    const kodeKecamatanRepo = AppDataSource.getRepository(kodeKecamatan);
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
    const kodeKelurahanRepo = AppDataSource.getRepository(kodeKelurahan);
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
