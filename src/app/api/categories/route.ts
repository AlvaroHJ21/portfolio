import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  return NextResponse.json({
    ok: true,
    data: await prisma.category.findMany(),
  });
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({
        ok: false,
        error: 'el nombre es obligatorio',
      });
    }

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return NextResponse.json({
      ok: true,
      data: category,
    });
    
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error: error,
    });
  }
}
