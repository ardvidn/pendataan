import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { accountRole } from "./entity/accountRole";
import { userAccount } from "./entity/userAccount";
import { DatOpBangunan } from "./entity/datOpBangunan";
import { DatOpPajak } from "./entity/datOpPajak";
import { WajibPajak } from "./entity/wajibPajak";
import { LogDatOpPajak } from "./entity/logDatOpPajak";
import { LogDatOpBangunan } from "./entity/logDatOpBangunan";
import { LogWajibPajak } from "./entity/logWajibPajak";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: true,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
  entities: [accountRole, userAccount, DatOpBangunan, DatOpPajak, WajibPajak, LogDatOpPajak, LogDatOpBangunan, LogWajibPajak],
  migrations: ["src/migrations/*.ts"],
  subscribers: ["src/subscriber/*.ts"],
});
