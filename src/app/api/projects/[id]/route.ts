import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Project } from '@/interfaces';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    ok: true,
    data: await prisma.projects.findUnique({
      where: {
        id: Number(params.id),
      },
      include: {
        categories: true,
        tecnologies: true,
      },
    }),
  });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const {
      name,
      priority,
      description,
      url,
      categories,
      tecnologies,
      images,
      published,
    }: Project = await request.json();

    // console.log(id);
    // console.log({ name, description, url, categories, tecnologies, images });

    const projectFound = await prisma.projects.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        categories: true,
        tecnologies: true,
      },
    });

    if (!projectFound)
      return NextResponse.json({
        ok: false,
        error: 'Project not found',
      });

    await prisma.projects.update({
      where: { id: Number(id) },
      data: {
        categories: {
          disconnect: projectFound.categories,
        },
        tecnologies: {
          disconnect: projectFound.tecnologies,
        },
      },
    });

    return NextResponse.json({
      ok: true,
      data: await prisma.projects.update({
        where: {
          id: Number(id),
        },
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
          images,
          published,
        },
      }),
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error: error,
    });
  }
}
