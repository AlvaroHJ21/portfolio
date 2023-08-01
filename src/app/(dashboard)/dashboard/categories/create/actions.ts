import prisma from '@/lib/prisma';

export async function addCategory(data: FormData) {
  try {
    console.log('agregando...');
    const name = data.get('name');
    if (!name) return;
    await prisma.category.create({
      data: {
        name: name as string,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
