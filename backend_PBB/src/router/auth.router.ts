import { getMe, getRole, login, logout, register, updateUser } from "../controller/auth";
import { validateLogin, validateRegister, validateUpdateUser } from "../middleware/validators";
import { Router } from "express";

const authRouther = Router();

authRouther.post("/register", validateRegister, register as any);
authRouther.post("/login", validateLogin, login as any);
authRouther.post("/logout", logout as any);
authRouther.put("/update", validateUpdateUser, updateUser as any);
authRouther.get("/me", getMe as any);
authRouther.get("/role", getRole as any);

export default authRouther;
