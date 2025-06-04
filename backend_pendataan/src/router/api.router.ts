import { Router } from "express";
import authRouther from "./auth.router";
import postRouter from "./post.router";
import getRouter from "./get.router";
import deleteRouter from "./delete.router";
import putRouter from "./put.router";

const apiRouter = Router();

apiRouter.use("/auth", authRouther);
apiRouter.use("/post", postRouter);
apiRouter.use("/get", getRouter);
apiRouter.use("/delete", deleteRouter);
apiRouter.use("/put", putRouter);

export default apiRouter;
