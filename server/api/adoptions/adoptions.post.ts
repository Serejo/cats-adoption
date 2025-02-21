// server/api/adoptions.post.ts
import prisma from "~/server/utils/prisma";
import { readBody } from "h3";
import { z } from "zod";

const adoptionRequestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  cpf: z.string().min(1, { message: "CPF is required" }),
  contact: z.string().min(1, { message: "Contact is required" }),
  visitDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  catId: z.number().int(),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const parsedData = adoptionRequestSchema.parse(body);

    const visitDate = new Date(parsedData.visitDate);

    const newRequest = await prisma.adoptionRequest.create({
      data: {
        ...parsedData,
        visitDate,
      },
    });
    return newRequest;
  } catch (err: any) {
    console.error("Validation or creation error:", err);
    return { error: err.errors || err.message };
  }
});
