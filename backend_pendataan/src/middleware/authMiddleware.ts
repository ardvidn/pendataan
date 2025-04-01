// import { Response, NextFunction, Request } from "express";
// import jwt from "jsonwebtoken";
// import { AuthenticatedRequest } from "@/types/express";
// import { verifyToken } from "@/utils/jwt";

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
//   const authToken = req.cookies["user-cookies"];

//   if (!authToken) {
//     return res.status(403).json({
//       code: 403,
//       message: "You are not allowed to access this endpoint1",
//     });
//   }

//   const verifyTokenResult = verifyToken(authToken);

//   if (!verifyTokenResult.isValid) {
//     return res.status(403).json({
//       code: 403,
//       message: "Invalid Token",
//     });
//   }

//   const { id, role } = verifyTokenResult.data;

//   const admin = role === "admin";
//   const user = role === "user";

//   req.body = { id, role, authToken, ...req.body };

//   next();
// };

// // Middleware untuk membatasi akses berdasarkan role
// export const authorizeRole = (roles: string[]) => {
//   return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//     if (!req.user || !roles.includes(req.user.role)) {
//       return res.status(403).json({ code: 403, message: "Akses ditolak! Anda tidak memiliki izin." });
//     }
//     next();
//   };
// };

import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "@/types/express";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Middleware untuk autentikasi pengguna
export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies["user-cookies"]; // Ambil token dari cookie

    if (!token) {
      return res.status(403).json({
        code: 403,
        message: "Akses ditolak! Tidak ada token.",
      });
    }

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({
          code: 403,
          message: "Token tidak valid!",
        });
      }

      // Simpan user ke dalam req agar bisa diakses di route lain
      (req as AuthenticatedRequest).user = decoded as { id: number; username: string; role: string };

      next();
    });
  } catch (error) {
    console.error("Error saat autentikasi:", error);
    return res.status(500).json({
      code: 500,
      message: "Terjadi kesalahan server",
    });
  }
};

// Middleware untuk otorisasi berdasarkan role
export const authorizeRole = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        code: 403,
        message: "Akses ditolak! Anda tidak memiliki izin.",
      });
    }
    next();
  };
};
