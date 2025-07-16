import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const client = globalThis.prisma || new PrismaClient();
// Ensure the PrismaClient instance is not recreated in development
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default prisma;