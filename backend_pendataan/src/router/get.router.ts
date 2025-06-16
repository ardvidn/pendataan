import { checkDatOpPajakBaru, getDatOpPajakBaruByNOP } from "../controller/datOpPajakBaru";
import { checkDatOpPajakExist, getDatOpPajakUpdate, getDatOpPajakUpdateByNOP, getDatOpPajakUpdateBySearch } from "../controller/datOpPajakUpdate";
import { GetFotoPersil } from "../controller/handleImage";
import { getKodeKabupaten, getKodeKecamatan, getKodeKelurahan, getKodeProvinsi } from "../controller/kodeWilayah";
import { Router } from "express";
import { getAccountRole, getAccountRoleById, getAccountRoleBySearch } from "../controller/role";
import { getAccountUser, getAccountUserById, getAccountUserBySearch } from "../controller/user";
import { getTitikPendataan } from "../controller/titikpendataan";

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
getRouter.get("/checkdatoppajakbaru", checkDatOpPajakBaru as any);
getRouter.get("/getoppajakbarubynop", getDatOpPajakBaruByNOP as any);
getRouter.get("/getaccountrole", getAccountRole as any);
getRouter.get("/getaccountrolebysearch", getAccountRoleBySearch as any);
getRouter.get("/getaccountrolebyid/:roleid", getAccountRoleById as any);
getRouter.get("/getuseraccount", getAccountUser as any);
getRouter.get("/getuseraccountbysearch", getAccountUserBySearch as any);
getRouter.get("/getuseraccountbyid/:userid", getAccountUserById as any);
getRouter.get("/gettitikpendataan", getTitikPendataan as any);

export default getRouter;
