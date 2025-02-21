import { PrismaClient } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.cat.deleteMany();

  const catsData = Array.from({ length: 10 }).map(() => {
    const width = faker.datatype.number({ min: 600, max: 800 });
    const height = faker.datatype.number({ min: 400, max: 600 });
    const randomParam = faker.datatype.uuid();

    return {
      name: faker.animal.cat(),
      age: faker.datatype.number({ min: 1, max: 15 }),
      description: faker.lorem.sentence(),
      image: `https://loremflickr.com/${width}/${height}/cat?lock=${randomParam}`,
      status: "Available",
    };
  });

  for (const catData of catsData) {
    await prisma.cat.create({ data: catData });
  }

  console.log("Seed de gatos concluída.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
