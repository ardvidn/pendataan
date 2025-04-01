import { Router } from "express";
import authRouther from "./auth.router";
import postRouter from "./post.router";
import getRouter from "./get.router";

const apiRouter = Router();

apiRouter.use("/auth", authRouther);
apiRouter.use("/post", postRouter);
apiRouter.use("/get", getRouter);

export default apiRouter;
