import prisma from "~/server/utils/prisma";

export default defineEventHandler(async () => {
  console.log("Endpoint /api/cats foi chamado.");
  try {
    const cats = await prisma.cat.findMany({});
    console.log("Gatos encontrados:", cats);
    return cats;
  } catch (error) {
    console.error("Erro ao buscar gatos:", error);
    return { error: "Erro ao buscar gatos" };
  }
});
