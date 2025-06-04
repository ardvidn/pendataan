import { Router } from "express";
import { editAccountRole } from "../controller/role";

const putRouter = Router();

putRouter.put("/editaccountrole/:roleid", editAccountRole as any);

export default putRouter;
