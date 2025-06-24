import { Request, Response } from 'express'
import prisma from '../config/db'

// 创建事件记录
export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await prisma.event.create({
      data: req.body
    })
    res.status(201).json(event)
  } catch (error) {
    res.status(500).json({ 
      error: '创建事件记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取单个事件记录
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const event = await prisma.event.findUnique({
      where: { id }
    })
    
    if (!event) {
      return res.status(404).json({ error: '未找到事件记录' })
    }
    
    res.json(event)
  } catch (error) {
    res.status(500).json({ 
      error: '获取事件记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取所有事件记录（带分页和过滤）
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const { sensor, src_ip, page = '1', limit = '10' } = req.query
    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    
    const where: any = {}
    if (sensor) where.sensor = sensor as string
    if (src_ip) where.src_ip = src_ip as string
    
    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { time: 'desc' }
      }),
      prisma.event.count({ where })
    ])
    
    res.json({
      data: events,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    })
  } catch (error) {
    res.status(500).json({ 
      error: '获取事件列表失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取事件统计信息
export const getEventStats = async (req: Request, res: Response) => {
  try {
    const topSensors = await prisma.event.groupBy({
      by: ['sensor'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 5
    })
    
    const topSrcIps = await prisma.event.groupBy({
      by: ['src_ip'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 5
    })
    
    res.json({
      topSensors,
      topSrcIps
    })
  } catch (error) {
    res.status(500).json({ 
      error: '获取事件统计失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}