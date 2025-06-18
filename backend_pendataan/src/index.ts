import express, { NextFunction, Request, Response, urlencoded } from "express";
import cors from "cors";
import apiRouter from "./router/api.router";
import "reflect-metadata";
import { AppDataSource } from "./data-resource";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser(process.env.COOKIES_SECRET));
app.use(express.json());
app.use(cors({ origin: [`${process.env.CLIENT_URL1}`, `${process.env.CLIENT_URL2}`, `${process.env.CLIENT_URL3}`], methods: "GET,POST,PUT,DELETE", allowedHeaders: "Content-Type,Authorization", credentials: true }));
app.use(urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use("/public", express.static("./public"));

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`  ➜  [API] Local: http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((error) => console.log(error));

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
