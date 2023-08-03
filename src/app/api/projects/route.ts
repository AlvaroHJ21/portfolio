import { NextResponse } from 'next/server';
import { Project } from '@/interfaces';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  return NextResponse.json({
    ok: true,
    data: await prisma.project.findMany({
      include: {
        categories: true,
        tecnologies: true,
      },
    }),
  });
}

export async function POST(request: Request) {
  try {
    //TODO: obtener imagenes y subirlas a cloudinary

    const { name, description, categories, tecnologies, images } =
      (await request.json()) as Project;

    const project = await prisma.project.create({
      data: {
        name,
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
