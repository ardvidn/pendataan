import { checkDatOpPajakExist, getDatOpPajakUpdate, getDatOpPajakUpdateByNOP, getDatOpPajakUpdateBySearch } from "@/controller/datOpPajakUpdate";
import { GetFotoPersil } from "@/controller/handleImage";
import { getKodeKabupaten, getKodeKecamatan, getKodeKelurahan, getKodeProvinsi } from "@/controller/kodeWilayah";
import { Router } from "express";

const getRouter = Router();

getRouter.get("/getoppajakupdate", getDatOpPajakUpdate as any);
getRouter.get("/getoppajakupdatebynop", getDatOpPajakUpdateByNOP as any);
getRouter.get("/getoppajakupdatebysearch", getDatOpPajakUpdateBySearch as any);
getRouter.get("/getkodeprovinsi", getKodeProvinsi as any);
getRouter.get("/getkodekabupaten", getKodeKabupaten as any);
getRouter.get("/getkodekecamatan", getKodeKecamatan as any);
getRouter.get("/getkodekelurahan", getKodeKelurahan as any);
getRouter.get("/checkdatoppajak/:nop", checkDatOpPajakExist as any);
getRouter.get("/getfotopersil/:nop", GetFotoPersil as any);

export default getRouter;
