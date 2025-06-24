import { Request, Response } from 'express'
import prisma from '../config/db'

// 创建传感器记录
export const createSensor = async (req: Request, res: Response) => {
  try {
    const sensor = await prisma.sensors.create({
      data: req.body
    })
    res.status(201).json(sensor)
  } catch (error) {
    res.status(500).json({ 
      error: '创建传感器记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取单个传感器记录
export const getSensorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const sensor = await prisma.sensors.findUnique({
      where: { id }
    })
    
    if (!sensor) {
      return res.status(404).json({ error: '未找到传感器记录' })
    }
    
    res.json(sensor)
  } catch (error) {
    res.status(500).json({ 
      error: '获取传感器记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取所有传感器记录（带分页和协议过滤）
export const getAllSensors = async (req: Request, res: Response) => {
  try {
    const { protocol, page = '1', limit = '10' } = req.query
    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    
    const where: any = {}
    if (protocol) where.protocol = protocol as string
    
    const [sensors, total] = await Promise.all([
      prisma.sensors.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { time: 'desc' }
      }),
      prisma.sensors.count({ where })
    ])
    
    res.json({
      data: sensors,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    })
  } catch (error) {
    res.status(500).json({ 
      error: '获取传感器列表失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取端口使用情况统计
export const getPortUsage = async (req: Request, res: Response) => {
  try {
    const topSrcPorts = await prisma.sensors.groupBy({
      by: ['src_port'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 10
    })
    
    const topDstPorts = await prisma.sensors.groupBy({
      by: ['dst_port'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 10
    })
    
    res.json({
      topSrcPorts,
      topDstPorts
    })
  } catch (error) {
    res.status(500).json({ 
      error: '获取端口统计失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}