import { NextResponse } from 'next/server';
import { Project } from '@/interfaces';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const order = searchParams.get('order');
  // console.log(order);
  return NextResponse.json({
    ok: true,
    data: await prisma.projects.findMany({
      include: {
        categories: true,
        tecnologies: true,
      },
      orderBy: {
        priority: order === 'asc' ? 'asc' : 'desc',
      },
    }),
  });
}

export async function POST(request: Request) {
  try {
    //TODO: obtener imagenes y subirlas a cloudinary

    const {
      name,
      description,
      url,
      categories,
      tecnologies,
      images,
      priority,
      published,
    }: Project = await request.json();

    const project = await prisma.projects.create({
      data: {
        url,
        name,
        priority,
        description,
        categories: {
          connect: categories.map((category) => {
            return { id: category.id };
          }),
        },
        tecnologies: {
          connect: tecnologies.map((tecnology) => {
            return { id: tecnology.id };
          }),
        },
        images: images,
        published,
      },
    });

    return NextResponse.json({
      ok: true,
      data: project,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error: error,
    });
  }
}
