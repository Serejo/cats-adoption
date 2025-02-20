import prisma from "~/server/utils/prisma";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newCat = await prisma.cat.create({
      data: {
        name: body.name,
        age: body.age,
        description: body.description,
        image: body.image, // Se estiver utilizando upload via Supabase Storage, você pode salvar o URL da imagem aqui.
        status: body.status || "Disponível",
      },
    });
    return newCat;
  } catch (error) {
    console.error("Erro ao criar gato:", error);
    return { error: "Erro ao criar gato" };
  }
});
