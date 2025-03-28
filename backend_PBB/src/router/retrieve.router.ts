import { getAllDatObjekPajak } from "@/controller/getDatObjekPajak";
import { Router } from "express";

const retrieveRouter = Router();

retrieveRouter.get("/datobjekpajak", getAllDatObjekPajak as any);

export default retrieveRouter;
