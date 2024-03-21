import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(product);
}
