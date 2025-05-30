import { inputDatOpPajakBaru } from "../controller/datOpPajakBaru";
import { inputDatOpPajakHapus } from "../controller/datOpPajakHapus";
import { inputDatOpPajakUpdate } from "../controller/datOpPajakUpdate";
import { PostFotoPersil, uploadFotoMiddleware } from "../controller/handleImage";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/inputopbaru", inputDatOpPajakBaru as any);
postRouter.post("/inputopupdate", inputDatOpPajakUpdate as any);
postRouter.post("/inputophapus", inputDatOpPajakHapus as any);
postRouter.post("/fotoobjekpajak/:nop", uploadFotoMiddleware, PostFotoPersil as any);

export default postRouter;
