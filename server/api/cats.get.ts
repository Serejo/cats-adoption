import prisma from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const cats = await prisma.cat.findMany({
      orderBy: {
        id: "desc",
      },
    });
    console.log("Gatos encontrados:", cats);
    return cats;
  } catch (error) {
    console.error("Erro ao buscar gatos:", error);
    return { error: "Erro ao buscar gatos" };
  }
});
