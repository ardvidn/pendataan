import { Request, Response } from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary";
import streamifier from "streamifier";

const upload = multer({ storage: multer.memoryStorage() });

// Middleware single file
export const uploadFotoMiddleware = upload.single("fotopersil");

export const PostFotoPersil = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const nop = req.params.nop;
    const currentCount = parseInt(req.query.count as string) || 0;

    if (!file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    if (!/^\d{18}$/.test(nop)) {
      return res.status(400).json({ message: `Invalid NOP format: ${nop}` });
    }

    if (currentCount >= 2) {
      return res.status(400).json({ message: `NOP ${nop} already has 2 photos.` });
    }

    const photoNumber = currentCount + 1;
    // const extension = file.originalname.split(".").pop();
    const cloudinaryFileName = `${nop}_${photoNumber}`;

    const uploadImageToCloudinary = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "fotopersil",
            public_id: cloudinaryFileName,
            transformation: [{ width: 720, height: 400, crop: "fill" }, { quality: "auto:good" }, { format: "jpg" }],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              resolve(result?.secure_url || "");
            }
          }
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
    };

    const imageUrl = await uploadImageToCloudinary();

    return res.status(200).json({
      message: "Image uploaded successfully",
      imageUrls: [imageUrl],
    });
  } catch (error: any) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const DeleteFotoPersil = async (req: Request, res: Response) => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      return res.status(400).json({ message: "publicId is required" });
    }

    const result = await cloudinary.uploader.destroy(`fotopersil/${publicId.split(".")[0]}`);

    if (result.result !== "ok") {
      return res.status(400).json({ message: "Failed to delete image", result });
    }

    return res.status(200).json({ code: 200, message: "Image deleted successfully", result });
  } catch (error: any) {
    console.error("Error deleting image:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const GetFotoPersil = async (req: Request, res: Response) => {
  try {
    const { nop } = req.params;

    if (!/^\d{18}$/.test(nop)) {
      return res.status(400).json({ message: `Invalid NOP format: ${nop}` });
    }

    const result = await cloudinary.search.expression(`public_id starts_with "fotopersil/${nop}_*"`).sort_by("public_id", "asc").max_results(5).execute();

    const imageUrls = result.resources.map((file: any) => file.secure_url);

    if (imageUrls.length === 0) {
      return res.status(404).json({
        code: 404,
        message: "Image not found",
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Fetched images successfully",
      imageUrls,
    });
  } catch (error: any) {
    console.error("Error fetching Cloudinary images:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};
