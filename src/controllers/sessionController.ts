import { Request, Response } from 'express'
import prisma from '../config/db'

// 创建会话记录
export const createSession = async (req: Request, res: Response) => {
  try {
    const session = await prisma.sessions.create({
      data: req.body
    })
    res.status(201).json(session)
  } catch (error) {
    res.status(500).json({ 
      error: '创建会话记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取单个会话记录
export const getSessionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const session = await prisma.sessions.findUnique({
      where: { id },
      include: {
        // 关联查询示例（根据实际需求调整）
        auths: true,
        events: true
      }
    })
    
    if (!session) {
      return res.status(404).json({ error: '未找到会话记录' })
    }
    
    res.json(session)
  } catch (error) {
    res.status(500).json({ 
      error: '获取会话记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取所有会话记录（带分页和会话持续时间计算）
export const getAllSessions = async (req: Request, res: Response) => {
  try {
    const { sensor, src_ip, page = '1', limit = '10' } = req.query
    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    
    const where: any = {}
    if (sensor) where.sensor = sensor as string
    if (src_ip) where.src_ip = src_ip as string
    
    const sessions = await prisma.sessions.findMany({
      where,
      skip,
      take: limitNum,
      orderBy: { time: 'desc' },
      select: {
        id: true,
        sensor: true,
        session: true,
        src_ip: true,
        starttime: true,
        endtime: true,
        time: true,
        sshversion: true
      }
    })
    
    // 添加持续时间计算
    const sessionsWithDuration = sessions.map((session: { starttime: string | number | Date; endtime: string | number | Date }) => {
      const start = new Date(session.starttime).getTime()
      const end = new Date(session.endtime).getTime()
      const duration = isNaN(start) || isNaN(end) ? 0 : (end - start) / 1000
      
      return {
        ...session,
        duration: duration > 0 ? `${duration.toFixed(2)}秒` : '未知'
      }
    })
    
    const total = await prisma.sessions.count({ where })
    
    res.json({
      data: sessionsWithDuration,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    })
  } catch (error) {
    res.status(500).json({ 
      error: '获取会话列表失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取会话时间分布统计
export const getSessionDurationStats = async (req: Request, res: Response) => {
  try {
    const sessions = await prisma.sessions.findMany({
      select: {
        starttime: true,
        endtime: true
      },
      take: 1000 // 限制数据量
    })
    
    const durationStats = sessions
      .map((session: { starttime: string | number | Date; endtime: string | number | Date }) => {
        const start = new Date(session.starttime).getTime()
        const end = new Date(session.endtime).getTime()
        return isNaN(start) || isNaN(end) ? 0 : (end - start) / 1000
      })
      .filter((duration: number) => duration > 0)
      .reduce((stats: Record<string, number>, duration: number) => {
        if (duration < 10) stats['<10秒'] = (stats['<10秒'] || 0) + 1
        else if (duration < 60) stats['10-60秒'] = (stats['10-60秒'] || 0) + 1
        else if (duration < 300) stats['1-5分钟'] = (stats['1-5分钟'] || 0) + 1
        else if (duration < 1800) stats['5-30分钟'] = (stats['5-30分钟'] || 0) + 1
        else stats['>30分钟'] = (stats['>30分钟'] || 0) + 1
        return stats
      }, {})
    
    res.json(durationStats)
  } catch (error) {
    res.status(500).json({ 
      error: '获取会话时长统计失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}