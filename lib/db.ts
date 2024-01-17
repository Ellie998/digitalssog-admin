import { PrismaClient } from "@prisma/client/edge";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// globalThis는 전역객체에 접근할 수 있는 식별자
export const db = globalThis.prisma || new PrismaClient();
// use `prisma` in your application to read and write data in your DB

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// export const db = new PrismaClient();
