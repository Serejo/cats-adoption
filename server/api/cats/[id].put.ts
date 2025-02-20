import prisma from "~/server/utils/prisma";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  try {
    const body = await readBody(event);
    const updatedCat = await prisma.cat.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
        age: body.age,
        description: body.description,
        image: body.image,
        status: body.status,
      },
    });
    return updatedCat;
  } catch (error) {
    console.error("Erro ao atualizar gato:", error);
    return { error: "Erro ao atualizar gato" };
  }
});
