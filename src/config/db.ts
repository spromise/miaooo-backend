import { PrismaClient as MainPrismaClient } from '@prisma/client'
import { PrismaClient as DB2PrismaClient } from '../../prisma/DB2Client/testClient'

// 验证环境变量
if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not defined in environment variables')
}
if (!process.env.tanner_DATABASE_URL) {
  throw new Error('❌ tanner_DATABASE_URL is not defined in environment variables')
}

// 单例模式确保只有一个 Prisma 实例
const mainPrismaClientSingleton = () => {
  return new MainPrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'info', 'warn', 'error']
      : ['error']
  })
}

const db2PrismaClientSingleton = () => {
  return new DB2PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'info', 'warn', 'error']
      : ['error']
  })
}

declare global {
  // eslint-disable-next-line no-var
  var mainPrisma: undefined | ReturnType<typeof mainPrismaClientSingleton>
  var db2Prisma: undefined | ReturnType<typeof db2PrismaClientSingleton>
}

const mainPrisma = globalThis.mainPrisma ?? mainPrismaClientSingleton()
const db2Prisma = globalThis.db2Prisma ?? db2PrismaClientSingleton()

export { mainPrisma, db2Prisma }

if (process.env.NODE_ENV !== 'production') {
  globalThis.mainPrisma = mainPrisma
  globalThis.db2Prisma = db2Prisma
}