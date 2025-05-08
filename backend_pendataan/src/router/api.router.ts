import { Router } from "express";
import authRouther from "./auth.router";
import postRouter from "./post.router";
import getRouter from "./get.router";
import deleteRouter from "./delete.router";

const apiRouter = Router();

apiRouter.use("/auth", authRouther);
apiRouter.use("/post", postRouter);
apiRouter.use("/get", getRouter);
apiRouter.use("/delete", deleteRouter);

export default apiRouter;
