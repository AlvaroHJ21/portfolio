import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  return NextResponse.json({
    ok: true,
    data: await prisma.tecnologies.findMany(),
  });
}
