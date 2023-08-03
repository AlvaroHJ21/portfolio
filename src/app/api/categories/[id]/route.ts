import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const DELETE = async (request: Request, { params }: any) => {
  const { id } = params;
  try {
    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      ok: true,
    });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

