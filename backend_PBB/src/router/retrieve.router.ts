import { getAllDatObjekPajak } from "@/controller/getDatObjekPajak";
import { getKodeKecamatan, getKodeKelurahan } from "@/controller/getKodeWilayah";
import { getKodeZnt } from "@/controller/getKodeZnt";
import { getWajibPajak } from "@/controller/getWajibPajak";
import { Router } from "express";

const retrieveRouter = Router();

retrieveRouter.get("/datobjekpajak", getAllDatObjekPajak as any);
retrieveRouter.get("/kodekecamatan", getKodeKecamatan as any);
retrieveRouter.get("/kodekelurahan", getKodeKelurahan as any);
retrieveRouter.get("/kodeznt", getKodeZnt as any);
retrieveRouter.get("/wajibpajak", getWajibPajak as any);

export default retrieveRouter;
