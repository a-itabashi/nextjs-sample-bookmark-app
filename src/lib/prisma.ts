import { PrismaClient } from '@prisma/client';
import 'server-only';

let prisma: PrismaClient;

// PrismaClient をインスタンス化し、それをグローバルオブジェクトに保存する
// PrismaClient がグローバルオブジェクトに存在しない場合のみ、インスタンス化する
// PrismaClient がグローバルオブジェクトに存在する場合は、同じインスタンスを再度使用し、
// 余分な PrismaClient インスタンスを生成しないようにする

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
