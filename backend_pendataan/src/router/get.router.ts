import { getDatOpPajakUpdate, getDatOpPajakUpdateByNOP } from "@/controller/datOpPajakUpdate";
import { Router } from "express";

const getRouter = Router();

getRouter.get("/getoppajakupdate", getDatOpPajakUpdate as any);
getRouter.get("/getoppajakupdatebynop", getDatOpPajakUpdateByNOP as any);

export default getRouter;
