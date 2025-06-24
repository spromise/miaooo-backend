import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import prisma from './config/db' // 添加这行
import authRoutes from './routes/authRoutes'
import eventRoutes from './routes/eventRoutes'
import sensorRoutes from './routes/sensorRoutes'
import sessionRoutes from './routes/sessionRoutes'
import { errorHandler, notFoundHandler } from './utils/errorHandler'

console.log('✅ Environment variables loaded:')
console.log(`   PORT: ${process.env.PORT}`)
console.log(`   DATABASE_URL: ${process.env.DATABASE_URL ? 'set' : 'not set'}`)
console.log(`   NODE_ENV: ${process.env.NODE_ENV}`)

const app = express()
const PORT = process.env.PORT || 3000

// 中间件
app.use(cors())
app.use(express.json())

// API 路由
app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/sensors', sensorRoutes)
app.use('/api/sessions', sessionRoutes)

// 健康检查
app.get('/health', async (req, res) => {
  try {
    // MongoDB 特定的健康检查 - 使用 $runCommandRaw
    const result = await prisma.$runCommandRaw({ ping: 1 });
    
    // 验证响应
    if (result.ok === 1) {
      res.status(200).json({ 
        status: 'UP', 
        database: 'Connected', 
        timestamp: new Date().toISOString(),
        dbResponse: result
      });
    } else {
      throw new Error('MongoDB ping command failed');
    }
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    res.status(500).json({ 
      status: 'DOWN', 
      database: 'Connection failed',
      error: errorMessage,
      timestamp: new Date().toISOString() 
    });
  }
});

// 错误处理
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  
  // 更安全的数据库URL日志
  const dbUrl = process.env.DATABASE_URL || ''
  const safeDbUrl = dbUrl.includes('@') 
    ? dbUrl.split('@')[1]?.split('/')[0] 
    : 'unknown';
  
  console.log(`📊 Prisma connected to MongoDB at ${safeDbUrl}`)
})