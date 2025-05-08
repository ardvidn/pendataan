import { getAllDatObjekPajak } from "../controller/getDatObjekPajak";
import { Router } from "express";

const postRouter = Router();

postRouter.put("/datobjekpajak", getAllDatObjekPajak as any);

export default postRouter;
