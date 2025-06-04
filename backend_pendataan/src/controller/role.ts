import { Request, Response } from "express";
import { AppDataSource } from "../data-resource";
import { accountRole } from "../entity/accountRole";

export const getAccountRole = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;

    const accountRoleRepo = AppDataSource.getRepository(accountRole);

    const [data, total] = await Promise.all([
      accountRoleRepo.find({
        skip,
        take: limit,
      }),
      accountRoleRepo.count(),
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

export const getAccountRoleBySearch = async (req: Request, res: Response) => {
  try {
    const { selectedrole } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;

    const accountRoleRepo = AppDataSource.getRepository(accountRole);

    if (!selectedrole || typeof selectedrole !== "string") {
      return res.status(400).json({ code: 400, message: "Parameter NOP diperlukan dan harus berupa string" });
    }

    const [data, total] = await Promise.all([
      accountRoleRepo.find({
        where: {
          Role: selectedrole,
        },
        skip,
        take: limit,
      }),
      accountRoleRepo.count({
        where: {
          Role: selectedrole,
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

export const createAccountRole = async (req: Request, res: Response) => {
  try {
    const { Role, Akses } = req.body;
    const accountRoleRepo = AppDataSource.getRepository(accountRole);
    const existingRole = await accountRoleRepo.findOne({
      where: {
        Role: Role,
      },
    });

    if (existingRole) {
      return res.status(409).json({ code: 409, message: "Role sudah dibuat!" });
    }

    const newRole = accountRoleRepo.create({
      id: (await accountRoleRepo.count()) + 1,
      Role: Role,
      akses: Akses,
    });
    await accountRoleRepo.save(newRole);

    console.log(existingRole);

    return res.status(201).json({
      code: 201,
      message: "Role berhasil dibuat!",
      data: newRole,
    });
  } catch (error) {
    console.error("Error membuat account role:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const deleteAccountRole = async (req: Request, res: Response) => {
  try {
    const { roleid } = req.params;

    const accountRoleRepo = AppDataSource.getRepository(accountRole);
    const roleData = await accountRoleRepo.findOne({ where: { id: Number(roleid) } });

    if (!roleData) {
      return res.status(404).json({ code: 404, message: "Data role tidak ditemukan" });
    }

    await accountRoleRepo.delete({ id: Number(roleid) });

    return res.status(200).json({
      code: 200,
      message: `Data dengan NOP ${roleData.Role} berhasil dihapus dan dicatat ke log.`,
    });
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

export const getAccountRoleById = async (req: Request, res: Response) => {
  try {
    const { roleid } = req.params;
    const accountRoleRepo = AppDataSource.getRepository(accountRole);
    const dataRole = await accountRoleRepo.findOne({
      where: {
        id: Number(roleid),
      },
    });

    if (!dataRole) {
      return res.status(404).json({ code: 404, message: "Data role tidak ditemukan" });
    }

    return res.status(200).json({
      code: 200,
      data: dataRole,
      message: "Data role berhasil ditemukan",
    });
  } catch (error) {
    console.error("Error mengambil data account role:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

export const editAccountRole = async (req: Request, res: Response) => {
  try {
    const { roleid } = req.params;
    const { Role, akses } = req.body;
    const accountRoleRepo = AppDataSource.getRepository(accountRole);
    const editRole = await accountRoleRepo.update({ id: Number(roleid) }, { Role, akses });

    const hasil = await accountRoleRepo.findOne({
      where: {
        id: Number(roleid),
      },
    });

    return res.status(200).json({
      code: 200,
      data: hasil,
      message: "data berhasil dirubah",
    });
  } catch (error) {
    console.error("Error mengambil data account role:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
