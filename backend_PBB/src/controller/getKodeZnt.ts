import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { DatNir } from "../entity/DatNir";

export const getKodeZnt = async (req: Request, res: Response) => {
  try {
    const { tahun, kd_prov, kd_kab, kd_kec, kd_kel } = req.query;
    const kodeZntRepo = AppDataSource.getRepository(DatNir);
    const dataKodeZnt = await kodeZntRepo.find({
      where: {
        thnNirZnt: tahun as string,
        kdPropinsi: kd_prov as string,
        kdDati2: kd_kab as string,
        kdKecamatan: kd_kec as string,
        kdKelurahan: kd_kel as string,
      },
    });

    return res.status(200).json({
      code: 200,
      data: dataKodeZnt,
      message: "Data kode ZNT berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data kode kecamatan:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
