import { PrismaClient } from '@prisma/client'
import { config } from "./config.js";

const globalWithApplication = globalThis as unknown as {
  database: PrismaClient ;
  [key:string]:PrismaClient | undefined;
};

const keys = ["database"];

if (keys.some((key) => !globalWithApplication[key])) {
  // Init Prisma
  const database = new PrismaClient({
    datasources: { db: { url: config.DATABASE_URL } },
  });
  globalWithApplication.database = database;
}

export const { database } = globalWithApplication;
