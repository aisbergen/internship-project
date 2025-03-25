'use server';

import prisma from '@/lib/prisma';
import { User } from '@prisma/client';

interface CreateUserInput {
  fullname: string;
  email: string;
  stripeId: string;
  type: 'user'; // if fixed value
  clerkId: string;
  createdAt?: Date; // make optional
  updatedAt?: Date;
}

export async function createUser({
  fullname,
  email,
  stripeId,
  type,
  clerkId,
  createdAt,
  updatedAt,
}: CreateUserInput): Promise<User> {
  const existingUser = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (existingUser) {
    return existingUser;
  }

  const now = new Date();

  const user = await prisma.user.create({
    data: {
      fullname,
      email,
      stripeId,
      type,
      clerkId,
      createdAt: createdAt ?? now,
      updatedAt: updatedAt ?? now,
    },
  });

  return user;
}
