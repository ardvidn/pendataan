import { deleteOpPajak } from "../controller/datOpPajakUpdate";
import { DeleteFotoPersil } from "../controller/handleImage";
import { Router } from "express";

const deleteRouter = Router();

deleteRouter.delete("/deleteobjekpajak/:nop", deleteOpPajak as any);
deleteRouter.delete("/fotoobjekpajak/:publicId", DeleteFotoPersil as any);

export default deleteRouter;
