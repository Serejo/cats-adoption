import prisma from "~/server/utils/prisma";

export default defineEventHandler(async () => {
  const adoptionList = await prisma.adoptionRequest.findMany({});
  return adoptionList;
});
