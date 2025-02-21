import prisma from "~/server/utils/prisma";
import { readBody } from "h3";
import { z } from "zod";

const catSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z.number({ invalid_type_error: "Age must be a number" }),
  description: z.string().optional(),
  image: z
    .string()
    .url({ message: "Image must be a valid URL" })
    .nullable()
    .optional(),
  status: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { id, ...data } = body;
    const validatedData = catSchema.parse(data);

    const newCat = await prisma.cat.create({
      data: {
        ...validatedData,
        status: validatedData.status || "Available",
      },
    });
    return newCat;
  } catch (error: any) {
    console.error("Erro ao criar gato:", error);
    if (error.errors) {
      return { error: error.errors };
    }
    return { error: "Erro ao criar gato" };
  }
});
