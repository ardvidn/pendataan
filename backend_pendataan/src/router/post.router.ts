import { inputDatOpPajakUpdate } from "@/controller/datOpPajakUpdate";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/inputopupdate", inputDatOpPajakUpdate as any);

export default postRouter;
