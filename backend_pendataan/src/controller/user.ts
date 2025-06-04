import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { userAccount } from "../entity/userAccount";
import { Not } from "typeorm";

export const getAccountUser = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;

    const accountUserRepo = AppDataSource.getRepository(userAccount);

    const [data, total] = await Promise.all([
      accountUserRepo.find({
        where: {
          role: Not("admin"),
        },
        skip,
        take: limit,
      }),
      accountUserRepo.count({
        where: {
          role: Not("admin"),
        },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return res.status(200).json({
      code: 200,
      data,
      total,
      totalPages,
      currentPage: page,
      message: "Data user account berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil user account:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getAccountUserBySearch = async (req: Request, res: Response) => {
  try {
    const { selecteduser } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;

    const accountUserRepo = AppDataSource.getRepository(userAccount);

    if (!selecteduser || typeof selecteduser !== "string") {
      return res.status(400).json({ code: 400, message: "Parameter NOP diperlukan dan harus berupa string" });
    }

    const [data, total] = await Promise.all([
      accountUserRepo.find({
        where: {
          username: selecteduser,
          role: Not("admin"),
        },
        skip,
        take: limit,
      }),
      accountUserRepo.count({
        where: {
          username: selecteduser,
          role: Not("admin"),
        },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return res.status(200).json({
      code: 200,
      data,
      total,
      totalPages,
      currentPage: page,
      message: "Data account role berhasil diambil",
    });
  } catch (error) {
    console.error("Error mengambil data account role:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const getAccountUserById = async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;
    const accountUserRepo = AppDataSource.getRepository(userAccount);
    const dataUser = await accountUserRepo.findOne({
      where: {
        id: Number(userid),
      },
      select: ["id", "username", "role", "status"],
    });

    if (!dataUser) {
      return res.status(404).json({ code: 404, message: "Data user tidak ditemukan" });
    }

    return res.status(200).json({
      code: 200,
      data: dataUser,
      message: "Data user berhasil ditemukan",
    });
  } catch (error) {
    console.error("Error mengambil data user account:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
