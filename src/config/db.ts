import { PrismaClient } from '@prisma/client'

// 验证环境变量
if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not defined in environment variables')
}

// 单例模式确保只有一个 Prisma 实例
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'info', 'warn', 'error'] 
      : ['error']
  })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma