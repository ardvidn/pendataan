import { Router } from "express";
import retrieveRouter from "./retrieve.router";

const apiRouter = Router();

apiRouter.use("/retrieve", retrieveRouter);

export default apiRouter;
