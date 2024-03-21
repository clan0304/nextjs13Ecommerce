import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, price, descriptions, category, image, isPopular } = body;

  const newProduct = await prisma.product.create({
    data: {
      price,
      name,
      descriptions,
      category,
      isPopular,
      image,
    },
  });

  return NextResponse.json(newProduct);
}

export async function GET(req: Request) {
  const products = await prisma.product.findMany({});

  return NextResponse.json(products);
}
