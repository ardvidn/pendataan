import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secretkey"; // Gantilah dengan env variable

export const generateToken = (user: any) => {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string): { isValid: boolean; data?: any } => {
  try {
    const verifiedToken = jwt.verify(token, SECRET_KEY);
    return {
      isValid: true,
      data: verifiedToken,
    };
  } catch {
    return {
      isValid: false,
    };
  }
};
