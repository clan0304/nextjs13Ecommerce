import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';

export async function POST(req: Request) {
  const body = await req.json();

  const { email, name, phone, address, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      phone,
      address,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
