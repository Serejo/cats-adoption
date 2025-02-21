import prisma from "~/server/utils/prisma";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, cpf, contact, visitDate, catId } = body;

  if (!name || !cpf || !contact || !visitDate || !catId) {
    return {
      error: "All fields (name, cpf, contact, visitDate, catId) are required",
    };
  }

  const newRequest = await prisma.adoptionRequest.create({
    data: {
      name,
      cpf,
      contact,
      visitDate: new Date(visitDate),
      catId: Number(catId),
    },
  });
  return newRequest;
});
