import prisma from "~/server/utils/prisma";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { id, ...data } = body;

    const newCat = await prisma.cat.create({
      data: {
        ...data,
        status: data.status || "Available",
      },
    });
    return newCat;
  } catch (error) {
    console.error("Erro ao criar gato:", error);
    return { error: "Erro ao criar gato" };
  }
});
