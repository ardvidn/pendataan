import { AppDataSource } from "../data-resource";
import { userAccount } from "../entity/userAccount";
import { Request, Response } from "express";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken, verifyToken } from "../utils/jwt";
import { jwtDecode } from "jwt-decode";
import { accountRole } from "../entity/accountRole";
import dayjs from "dayjs";

export interface jwtPayload {
  id: number;
  username: string;
  role: string;
}

// **Register**
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role, status } = req.body;

    if (!username || !password) {
      return res.status(400).json({ code: 400, message: "Username dan password wajib diisi!" });
    }

    const userRepo = AppDataSource.getRepository(userAccount);
    const existingUser = await userRepo.findOne({ where: { username } });

    if (existingUser) {
      return res.status(409).json({ code: 409, message: "Username sudah digunakan!" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = userRepo.create({ username, password: hashedPassword, role, status });
    await userRepo.save(newUser);

    return res.status(201).json({
      code: 201,
      message: "Akun berhasil dibuat!",
      data: { id: newUser.id, username: newUser.username, role: newUser.role, status: newUser.status },
    });
  } catch (error) {
    console.error("Error mendaftar akun:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

// **Login**
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ code: 400, message: "Username dan password wajib diisi!" });
    }

    const userRepo = AppDataSource.getRepository(userAccount);
    const user = await userRepo.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ code: 401, message: "Username atau password salah!" });
    }

    if (user.status === false) {
      return res.status(401).json({ code: 401, message: `Hubungi Admin untuk mengaktifkan akun dengan user ${user.username}` });
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ code: 401, message: "Username atau password salah!" });
    }

    // 🔹 Buat token JWT
    const token = generateToken({
      id: user.id,
      username,
      role: user.role,
    });

    // 🔹 Simpan token di cookies (HttpOnly + Secure)
    res.cookie("user-cookies", token, {
      httpOnly: false, // Mencegah akses dari JavaScript
      secure: true, // Aktifkan hanya di HTTPS
      sameSite: "none",
      expires: dayjs().add(1, "day").toDate(),
    });

    return res.status(200).json({
      code: 200,
      data: user.role,
      message: "Login berhasil!",
    });
  } catch (error) {
    console.error("Error saat login:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

// **Logout** (Menghapus token di frontend)
export const logout = async (req: Request, res: Response) => {
  res.clearCookie("user-cookies", {
    httpOnly: process.env.HTTPONLY === "true",
    secure: true,
    path: "/",
    sameSite: "none",
  });
  return res.status(200).json({ code: 200, message: "Logout berhasil!" });
};

// **Update Username atau Password**
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Id user harus diberikan
    const { username, role, status } = req.body;

    if (!userId || !username) {
      return res.status(400).json({ code: 400, data: userId, message: "Data tidak valid!" });
    }

    const userRepo = AppDataSource.getRepository(userAccount);
    const user = await userRepo.findOne({ where: { id: Number(userId) } });

    if (!user) {
      return res.status(404).json({ code: 404, message: "User tidak ditemukan!" });
    }

    if (username) user.username = username;
    if (role) user.role = role;
    user.status = status;

    await userRepo.save(user);

    return res.status(200).json({ code: 200, data: user, message: "Data akun berhasil diperbarui!" });
  } catch (error) {
    console.error("Error update akun:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const getCookies = req.cookies["user-cookies"];

    if (!getCookies) {
      return res.status(403).json({
        code: 403,
        loggedIn: false,
        message: "Token not found",
      });
    }

    // 🔹 Decode token dengan error handling
    let cookiesToDecode: jwtPayload;
    try {
      cookiesToDecode = jwtDecode<jwtPayload>(getCookies);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        loggedIn: false,
        message: "Invalid token format",
      });
    }

    return res.status(200).json({
      code: 200,
      loggedIn: true,
      data: cookiesToDecode,
      getCookies,
      message: "Token valid",
    });
  } catch (error) {
    console.error("Error di getMe:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const getRole = async (req: Request, res: Response) => {
  try {
    const roleRepo = AppDataSource.getRepository(accountRole);
    const role = await roleRepo.find();

    return res.status(200).json({
      code: 200,
      data: role,
      message: "role ditemukan",
    });
  } catch (error) {
    console.error("Error mengambil role:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;

    const accountUserRepo = AppDataSource.getRepository(userAccount);
    const userData = await accountUserRepo.findOne({ where: { id: Number(userid) } });

    if (!userData) {
      return res.status(404).json({ code: 404, message: "Data role tidak ditemukan" });
    }

    await accountUserRepo.delete({ id: Number(userid) });

    return res.status(200).json({
      code: 200,
      message: `pengguna dengan username ${userData.username} berhasil dihapus dan dicatat ke log.`,
    });
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};
