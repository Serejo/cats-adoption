import prisma from "~/server/utils/prisma";
import { sendError, createError } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  if (!id) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "ID is required" })
    );
  }

  try {
    const updatedRequest = await prisma.adoptionRequest.update({
      where: { id: Number(id) },
      data: { status: "Rejected" },
    });
    return updatedRequest;
  } catch (error) {
    console.error("Error updating adoption request:", error);
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    );
  }
});
