import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {

  return NextResponse.json({
    ok: true,
    data: await prisma.project.findUnique({
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
