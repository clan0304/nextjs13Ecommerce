import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { products, price } = body;
    const order = await prisma.order.create({
      data: {
        products,
        price,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(error);
  }
};
