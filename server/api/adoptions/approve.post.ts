import prisma from "~/server/utils/prisma";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body; // ID da solicitação
  if (!id) {
    return { error: "ID is required" };
  }
  const updatedRequest = await prisma.adoptionRequest.update({
    where: { id: Number(id) },
    data: { status: "Approved" },
  });
  return updatedRequest;
});
