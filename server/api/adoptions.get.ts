import prisma from "~/server/utils/prisma";

export default defineEventHandler(async () => {
  const adoptionList = await prisma.adoptionRequest.findMany({
    include: {
      cat: {
        select: { name: true },
      },
    },
  });

  return adoptionList.map((request) => ({
    ...request,
    catName: request.cat?.name || null,
  }));
});
