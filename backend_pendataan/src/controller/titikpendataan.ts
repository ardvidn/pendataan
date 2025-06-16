import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { DatOpPajak } from "../entity/datOpPajak";
import { WajibPajak } from "../entity/wajibPajak";
import { DatOpBangunan } from "../entity/datOpBangunan";

export const getTitikPendataan = async (req: Request, res: Response) => {
  try {
    const titikPendataanRepo = AppDataSource.getRepository(DatOpPajak);
    const wajibPajakRepo = AppDataSource.getRepository(WajibPajak);
    const bangunanRepo = AppDataSource.getRepository(DatOpBangunan);

    // Ambil semua data dari dat_op_pajak
    const dataOpPajak = await titikPendataanRepo.find();

    // Ambil semua wajib pajak
    const allWajibPajak = await wajibPajakRepo.find();

    // Ambil semua bangunan
    const allBangunan = await bangunanRepo.find();

    // Gabungkan data berdasarkan NOP
    const result = dataOpPajak.map((op) => {
      const wp = allWajibPajak.find((w) => w.nop === op.nop);
      const bangunan = allBangunan.filter((b) => b.nop === op.nop);

      return {
        datOpPajak: op,
        wajibPajak: wp,
        datOpBangunan: bangunan,
      };
    });

    return res.status(200).json({
      code: 200,
      data: result,
      message: "Data berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil titik pendataan:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

// import { Request, Response } from "express";
// import { AppDataSource } from "../data-resource";
// import { DatOpPajak } from "../entity/datOpPajak";
// import { WajibPajak } from "../entity/wajibPajak";
// import { DatOpBangunan } from "../entity/datOpBangunan";
// import { In } from "typeorm";

// export const getTitikPendataan = async (req: Request, res: Response) => {
//   try {
//     const { centerLat, centerLng, radiusKm } = req.query;

//     if (!centerLat || !centerLng || !radiusKm) {
//       return res.status(400).json({
//         code: 400,
//         message: "Parameter centerLat, centerLng, dan radiusKm diperlukan",
//       });
//     }

//     const lat = parseFloat(centerLat as string);
//     const lng = parseFloat(centerLng as string);
//     const radiusMeter = parseFloat(radiusKm as string) * 1000;

//     const titikPendataanRepo = AppDataSource.getRepository(DatOpPajak);

//     // Ambil data dalam radius dari titik tengah
//     const dataOpPajak = await titikPendataanRepo.createQueryBuilder("pajak").where(`ST_DWithin(pajak.geom, ST_SetSRID(ST_MakePoint(:lng, :lat), 4326), :radius)`, { lat, lng, radius: radiusMeter }).getMany();

//     // Ambil semua NOP terkait dari WP dan Bangunan
//     const nops = dataOpPajak.map((d) => d.nop);
//     const [allWajibPajak, allBangunan] = await Promise.all([AppDataSource.getRepository(WajibPajak).findBy({ nop: In(nops) }), AppDataSource.getRepository(DatOpBangunan).findBy({ nop: In(nops) })]);

//     const result = dataOpPajak.map((op) => {
//       const wp = allWajibPajak.find((w) => w.nop === op.nop);
//       const bangunan = allBangunan.filter((b) => b.nop === op.nop);

//       return {
//         ...op,
//         wajibPajak: wp,
//         datOpBangunan: bangunan,
//       };
//     });

//     return res.status(200).json({
//       code: 200,
//       data: result,
//       message: "Data berhasil diambil",
//     });
//   } catch (error) {
//     console.error("Error mengambil titik pendataan:", error);
//     return res.status(500).json({
//       code: 500,
//       message: "Internal server error",
//     });
//   }
// };
