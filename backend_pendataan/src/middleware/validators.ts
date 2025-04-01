import { body } from "express-validator";

// Validasi untuk Register
export const validateRegister = [
  body("username").trim().notEmpty().withMessage("Username wajib diisi!").isLength({ min: 3 }).withMessage("Username minimal 3 karakter!"),

  body("password").trim().notEmpty().withMessage("Password wajib diisi!").isLength({ min: 6 }).withMessage("Password minimal 6 karakter!"),
];

// Validasi untuk Login
export const validateLogin = [body("username").trim().notEmpty().withMessage("Username wajib diisi!"), body("password").trim().notEmpty().withMessage("Password wajib diisi!")];

// Validasi untuk Update User
export const validateUpdateUser = [
  body("userId").notEmpty().withMessage("User ID wajib diisi!").isInt().withMessage("User ID harus berupa angka!"),

  body("newUsername").optional().trim().isLength({ min: 3 }).withMessage("Username minimal 3 karakter!"),

  body("newPassword").optional().trim().isLength({ min: 6 }).withMessage("Password minimal 6 karakter!"),
];
