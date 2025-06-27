import { Request, Response } from "express";
import multer from "multer";
// import cloudinary from "../utils/cloudinary";
// import streamifier from "streamifier";

const upload = multer({ storage: multer.memoryStorage() });

// Middleware single file
export const uploadFotoMiddleware = upload.single("fotopersil");

/////////////////////////////////////////////////////////////////////

// di dalam controller atau middleware file
import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../utils/s3";

// export const PostFotoPersil = async (req: Request, res: Response) => {
//   try {
//     const file = req.file;
//     const nop = req.params.nop;
//     const forceName = req.query.forceName as string | undefined;
//     const currentCount = parseInt(req.query.count as string) || 0;

//     if (!file) return res.status(400).json({ message: "No image uploaded" });
//     if (!/^\d{18}$/.test(nop)) return res.status(400).json({ message: `Invalid NOP format: ${nop}` });
//     if (currentCount >= 2) return res.status(400).json({ message: `NOP ${nop} already has 2 photos.` });

//     const extension = file.originalname.split(".").pop();
//     const photoNumber = currentCount + 1;
//     const filename = `${nop}_${photoNumber}.${extension}`;
//     const bucketName = process.env.AWS_S3_BUCKET_NAME;
//     const key = `fotopersil/${filename}`;

//     // Upload ke S3
//     const command = new PutObjectCommand({
//       Bucket: bucketName,
//       Key: key,
//       Body: file.buffer,
//       ContentType: file.mimetype,
//       // ACL: "public-read",
//     });

//     await s3.send(command);

//     const imageUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

//     return res.status(200).json({
//       message: "Image uploaded successfully",
//       imageUrls: [imageUrl],
//     });
//   } catch (error: any) {
//     console.error("Upload error:", error);
//     return res.status(500).json({ message: error.message || "Internal server error" });
//   }
// };

export const PostFotoPersil = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const nop = req.params.nop;
    const forceName = req.query.forceName as string | undefined;
    const currentCount = parseInt(req.query.count as string) || 0;

    if (!file) return res.status(400).json({ message: "No image uploaded" });
    if (!/^\d{18}$/.test(nop)) return res.status(400).json({ message: `Invalid NOP format: ${nop}` });

    const extension = file.originalname.split(".").pop();
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    // Cek jumlah file di S3 (kecuali jika forceName dipakai)
    if (!forceName) {
      const prefix = `fotopersil/${nop}_`;
      const listCommand = new ListObjectsV2Command({ Bucket: bucketName, Prefix: prefix });
      const listResult = await s3.send(listCommand);
      const existingCount = listResult.Contents?.length || 0;

      if (existingCount >= 2) {
        return res.status(400).json({ message: `NOP ${nop} sudah memiliki 2 foto.` });
      }
    }

    // Penamaan file
    const filename = forceName ? `${forceName}.${extension}` : `${nop}_${currentCount + 1}.${extension}`;
    const key = `fotopersil/${filename}`;

    // Upload ke S3
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await s3.send(command);

    const imageUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return res.status(200).json({
      message: "Image uploaded successfully",
      imageUrls: [imageUrl],
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};

import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export const DeleteFotoPersil = async (req: Request, res: Response) => {
  try {
    const { publicId } = req.params;
    if (!publicId) return res.status(400).json({ message: "publicId is required" });

    const bucketName = process.env.AWS_S3_BUCKET_NAME!;
    const prefix = `fotopersil/${publicId}`;

    // 1. Cari file yang cocok (apapun ekstensinya)
    const listCommand = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix, // contoh: fotopersil/620101010101000101_1
      MaxKeys: 5,
    });

    const listResult = await s3.send(listCommand);
    // const target = listResult.Contents?.find((obj) => obj.Key?.startsWith(prefix));
    const target = listResult.Contents?.find((obj) => obj.Key?.startsWith(`${prefix}.`));

    if (!target || !target.Key) {
      return res.status(404).json({ message: "File not found in S3" });
    }

    // 2. Hapus file
    const deleteCommand = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: target.Key,
    });

    await s3.send(deleteCommand);

    return res.status(200).json({
      code: 200,
      message: "Image deleted successfully",
      deletedKey: target.Key,
    });
  } catch (error: any) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};

import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export const GetFotoPersil = async (req: Request, res: Response) => {
  try {
    const { nop } = req.params;
    if (!/^\d{18}$/.test(nop)) {
      return res.status(400).json({ message: `Invalid NOP format: ${nop}` });
    }

    const bucketName = process.env.AWS_S3_BUCKET_NAME!;
    const prefix = `fotopersil/${nop}_`;

    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix,
      MaxKeys: 5,
    });

    const result = await s3.send(command);

    const imageUrls =
      result.Contents?.map((item) => {
        return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`;
      }) || [];

    if (imageUrls.length === 0) {
      return res.status(200).json({
        code: 200,
        message: "Image empty",
        isEmpty: true,
        imageUrls: [],
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Fetched images from AWS S3 successfully",
      imageUrls,
    });
  } catch (error: any) {
    console.error("Error fetching S3 objects:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};
