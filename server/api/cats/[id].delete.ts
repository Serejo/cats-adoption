import prisma from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  try {
    const deletedCat = await prisma.cat.delete({
      where: { id: Number(id) },
    });
    return deletedCat;
  } catch (error) {
    console.error("Erro ao excluir gato:", error);
    return { error: "Erro ao excluir gato" };
  }
});
