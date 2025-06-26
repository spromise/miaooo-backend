import { Request, Response } from 'express'
import prisma from '../config/db'

// 创建认证记录
export const createAuthRecord = async (req: Request, res: Response) => {
  try {
    const authRecord = await prisma.auth.create({
      data: req.body
    })
    res.status(201).json(authRecord)
  } catch (error) {
    res.status(500).json({ 
      error: '创建认证记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 根据ID获取认证记录
export const getAuthRecordById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const authRecord = await prisma.auth.findUnique({
      where: { id }
    })
    
    if (!authRecord) {
      return res.status(404).json({ error: '未找到认证记录' })
    }
    
    res.json(authRecord)
  } catch (error) {
    res.status(500).json({ 
      error: '获取认证记录失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}

// 获取所有认证记录（带分页和用户名过滤）
export const getAllAuthRecords = async (req: Request, res: Response) => {
  try {
    const { username, sensor, page = '1', limit = '10' } = req.query
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (username) where.username = username as string;
    if (sensor) where.sensor = sensor as string;

    const [records, total] = await Promise.all([
      prisma.auth.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { time: 'desc' },
        select: {
          id: true,
          password: true,
          session: true,
          src_ip: true,
          system: true,
          time: true,
          username: true
        }
      }),
      prisma.auth.count({ where })
    ]);

    res.json({
      data: records,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: '获取认证记录列表失败',
      details: error instanceof Error ? error.message : String(error)
    });
  }
}

// 获取常见用户名统计
export const getTopUsernames = async (req: Request, res: Response) => {
  try {
    const topUsernames = await prisma.auth.groupBy({
      by: ['username'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 10
    })
    
    res.json(topUsernames)
  } catch (error) {
    res.status(500).json({ 
      error: '获取用户名统计失败',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}