import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { RefKecamatan } from "./entity/RefKecamatan";
import { RefDati2 } from "./entity/RefDati2";
import { RefKelurahan } from "./entity/RefKelurahan";
import { DatPetaBlok } from "./entity/DatPetaBlok";
import { DatZnt } from "./entity/DatZnt";
import { PenghapusanOpSe14 } from "./entity/PenghapusanOpSe14";
import { DatNir } from "./entity/DatNir";
import { DatPetaZnt } from "./entity/DatPetaZnt";
import { DatOpBumi } from "./entity/DatOpBumi";
import { DatObjekPajak } from "./entity/DatObjekPajak";
import { Pegawai } from "./entity/Pegawai";
import { DafnomOp } from "./entity/DafnomOp";
import { DafnomPiutang } from "./entity/DafnomPiutang";
import { KeputusanAngsuranPbb } from "./entity/KeputusanAngsuranPbb";
import { Sppt } from "./entity/Sppt";
import { PembayaranSppt } from "./entity/PembayaranSppt";
import { SspPbbSppt } from "./entity/SspPbbSppt";
import { KelasBangunan } from "./entity/KelasBangunan";
import { Skp } from "./entity/Skp";
import { PembayaranSkp } from "./entity/PembayaranSkp";
import { TempatPembayaran } from "./entity/TempatPembayaran";
import { PembayaranStp } from "./entity/PembayaranStp";
import { Stp } from "./entity/Stp";
import { TtrStp } from "./entity/TtrStp";
import { KelasTanah } from "./entity/KelasTanah";
import { SkpOpBersama } from "./entity/SkpOpBersama";
import { TtrSkp } from "./entity/TtrSkp";
import { SpptOpBersama } from "./entity/SpptOpBersama";
import { RincianAngsuranPbb } from "./entity/RincianAngsuranPbb";
import { DatSubjekPajak } from "./entity/DatSubjekPajak";
import { DatOpBangunan } from "./entity/DatOpBangunan";
import { DatSubjekPajakNjoptkp } from "./entity/DatSubjekPajakNjoptkp";
import { DatFasilitasBangunan } from "./entity/DatFasilitasBangunan";
import { Fasilitas } from "./entity/Fasilitas";
import { FasDepJpbKlsBintang } from "./entity/FasDepJpbKlsBintang";
import { FasDepMinMax } from "./entity/FasDepMinMax";
import { FasNonDep } from "./entity/FasNonDep";
import { DatJpb12 } from "./entity/DatJpb12";
import { DatJpb13 } from "./entity/DatJpb13";
import { DatJpb14 } from "./entity/DatJpb14";
import { DatJpb15 } from "./entity/DatJpb15";
import { DatJpb16 } from "./entity/DatJpb16";
import { DatJpb2 } from "./entity/DatJpb2";
import { DatJpb3 } from "./entity/DatJpb3";
import { DatJpb4 } from "./entity/DatJpb4";
import { DatJpb5 } from "./entity/DatJpb5";
import { DatJpb6 } from "./entity/DatJpb6";
import { DatJpb7 } from "./entity/DatJpb7";
import { DatJpb8 } from "./entity/DatJpb8";
import { DatJpb9 } from "./entity/DatJpb9";
import { DayaDukung } from "./entity/DayaDukung";
import { DbkbDayaDukung } from "./entity/DbkbDayaDukung";
import { DbkbJpb2 } from "./entity/DbkbJpb2";
import { DbkbJpb3 } from "./entity/DbkbJpb3";
import { DbkbJpb4 } from "./entity/DbkbJpb4";
import { DbkbJpb5 } from "./entity/DbkbJpb5";
import { DbkbJpb6 } from "./entity/DbkbJpb6";
import { DbkbJpb7 } from "./entity/DbkbJpb7";
import { DbkbJpb8 } from "./entity/DbkbJpb8";
import { DbkbJpb9 } from "./entity/DbkbJpb9";
import { DbkbJpb12 } from "./entity/DbkbJpb12";
import { DbkbJpb13 } from "./entity/DbkbJpb13";
import { DbkbJpb14 } from "./entity/DbkbJpb14";
import { DbkbJpb15 } from "./entity/DbkbJpb15";
import { DbkbJpb16 } from "./entity/DbkbJpb16";
import { DbkbMaterial } from "./entity/DbkbMaterial";
import { DbkbMezanin } from "./entity/DbkbMezanin";
import { DbkbStandard } from "./entity/DbkbStandard";
import { RefPropinsi } from "./entity/RefPropinsi";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,

  synchronize: false,
  logging: true,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
  entities: [
    RefKecamatan,
    RefDati2,
    RefKelurahan,
    DatPetaBlok,
    PenghapusanOpSe14,
    DatZnt,
    DatNir,
    DatPetaZnt,
    DatOpBumi,
    DatObjekPajak,
    Pegawai,
    DafnomOp,
    DafnomPiutang,
    KeputusanAngsuranPbb,
    Sppt,
    PembayaranSppt,
    SspPbbSppt,
    KelasBangunan,
    Skp,
    PembayaranSkp,
    TempatPembayaran,
    PembayaranStp,
    Stp,
    TtrStp,
    KelasTanah,
    SkpOpBersama,
    TtrSkp,
    SpptOpBersama,
    RincianAngsuranPbb,
    DatSubjekPajak,
    DatOpBangunan,
    DatSubjekPajakNjoptkp,
    DatFasilitasBangunan,
    Fasilitas,
    FasDepJpbKlsBintang,
    FasDepMinMax,
    FasNonDep,
    DatJpb12,
    DatJpb13,
    DatJpb14,
    DatJpb15,
    DatJpb16,
    DatJpb2,
    DatJpb3,
    DatJpb4,
    DatJpb5,
    DatJpb6,
    DatJpb7,
    DatJpb8,
    DatJpb9,
    DayaDukung,
    DbkbDayaDukung,
    DbkbJpb2,
    DbkbJpb3,
    DbkbJpb4,
    DbkbJpb5,
    DbkbJpb6,
    DbkbJpb7,
    DbkbJpb8,
    DbkbJpb9,
    DbkbJpb12,
    DbkbJpb13,
    DbkbJpb14,
    DbkbJpb15,
    DbkbJpb16,
    DbkbMaterial,
    DbkbMezanin,
    DbkbStandard,
    RefPropinsi,
  ],
  migrations: ["src/migrations/*.ts"],
  subscribers: ["src/subscriber/*.ts"],
});
