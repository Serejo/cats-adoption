import prisma from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };

  const cat = await prisma.cat.findUnique({
    where: { id: Number(id) },
  });

  if (!cat) {
    return { error: "Cat not found" };
  }

  return cat;
});
