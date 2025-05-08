import { inputDatOpPajakUpdate } from "../controller/datOpPajakUpdate";
import { PostFotoPersil, uploadFotoMiddleware } from "../controller/handleImage";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/inputopupdate", inputDatOpPajakUpdate as any);
postRouter.post("/fotoobjekpajak/:nop", uploadFotoMiddleware, PostFotoPersil as any);

export default postRouter;
