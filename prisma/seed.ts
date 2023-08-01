import { PrismaClient } from '@prisma/client';
import categories from '../src/data/categories';
import tecnologies from '../src/data/tecnologies';

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
    data: categories.map((category) => {
      delete category.id;
      return category;
    }),
  });

  await prisma.tecnology.deleteMany();
  await prisma.tecnology.createMany({
    data: tecnologies.map((tecnology) => {
      delete tecnology.id;
      return tecnology;
    }),
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
