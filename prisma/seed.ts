import { PrismaClient } from '@prisma/client';
import categories from '../src/data/categories';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: 'alvarohuaysara@gmail',
      name: 'Alvaro',
      password: 'alvarohj21',
    },
  });
  await prisma.category.deleteMany();
  await prisma.category.createMany({
    data: categories.map((category) => ({
      name: category.name,
    })),
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
