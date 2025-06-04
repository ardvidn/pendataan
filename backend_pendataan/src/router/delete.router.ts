import { deleteOpPajak } from "../controller/datOpPajakUpdate";
import { DeleteFotoPersil } from "../controller/handleImage";
import { Router } from "express";
import { deleteAccountRole } from "../controller/role";

const deleteRouter = Router();

deleteRouter.delete("/deleteobjekpajak/:nop", deleteOpPajak as any);
deleteRouter.delete("/fotoobjekpajak/:publicId", DeleteFotoPersil as any);
deleteRouter.delete("/deletaccountrole/:roleid", deleteAccountRole as any);

export default deleteRouter;
