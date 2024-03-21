import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export default async function handler(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { method } = req;

  if (method === 'GET') {
    const { id } = params;
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(product);
  }

  return new Response(null, {
    status: 405,
    statusText: 'Method Not Allowed',
  });
}
