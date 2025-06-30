import { Request, Response } from 'express'
import { mainPrisma } from '../config/db'

// 创建会话记录
export const createSession = async (req: Request, res: Response) => {
  try {
    const session = await mainPrisma.sessions.create({
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
    const session = await mainPrisma.sessions.findUnique({
      where: { id },
      include: {
        // 关联查询示例（根据实际需求调整）
        auths: true,
        events: true
      } as const // 添加as const断言
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
    const { sensor, src_ip, page = '100', limit = '50' } = req.query
    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    
    const where: any = {}
    if (sensor) where.sensor = sensor as string
    if (src_ip) where.src_ip = src_ip as string
    
    const sessions = await mainPrisma.sessions.findMany({
      where,
      skip,
      take: limitNum,
      orderBy: { time: 'desc' },
      select: {
        id: true,
        dst_ip: true,
        dst_port: true,
        protocol: true,
        session: true,
        src_ip: true,
        src_port: true,
        starttime: true,
        endtime: true
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
    
    const total = await mainPrisma.sessions.count({ where })
    
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
    const sessions = await mainPrisma.sessions.findMany({
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

// 在 sessionController.ts 中添加以下方法

// 获取攻击热力图数据
export const getAttackHeatmapData = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    
    // 如果没有提供日期，使用今天
    const targetDate = date ? new Date(date as string) : new Date();
    const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));
    
    const sessions = await mainPrisma.sessions.findMany({
      where: {
        starttime: {
          gte: startOfDay,
          lte: endOfDay
        }
      },
      select: {
        src_ip: true,
        starttime: true
      }
    });
    
    res.json({
      success: true,
      data: sessions
    });
  } catch (error) {
    res.status(500).json({ 
      error: '获取热力图数据失败',
      details: error instanceof Error ? error.message : String(error)
    });
  }
};