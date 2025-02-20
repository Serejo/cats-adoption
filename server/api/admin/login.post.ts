import prisma from "~/server/utils/prisma";
import { readBody } from "h3";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const TOKEN_EXPIRY_SECONDS = 3600;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    return { error: "Invalid email or password" };
  }

  if (admin.password !== password) {
    return { error: "Invalid email or password" };
  }

  const token = jwt.sign(
    { adminId: admin.id, email: admin.email },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY_SECONDS }
  );
  const tokenExpiry = new Date(Date.now() + TOKEN_EXPIRY_SECONDS * 1000);

  await prisma.admin.update({
    where: { id: admin.id },
    data: { token, tokenExpiry },
  });

  return { token, tokenExpiry };
});
