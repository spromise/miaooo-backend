import { Request, Response } from 'express'
import { db2Prisma } from '../config/db'

// 获取带 * 字段的 attack_logs
export const getAttackLogs = async (req: Request, res: Response) => {
  try {
    const logs = await db2Prisma.attack_logs.findMany({
      select: {
        id: true,                      // _id
        processed_at: true,            // 开始处理时间*
        attack_category: true,         // 攻击类别*
        cookies: true,                 // *
        headers: true,                 // 数据包头*
        method: true,                  // 请求方法*
        path: true,                    // 请求路径*
        peer: true,                    // 请求端信息*
        post_data: true,               // post数据*
        response_msg: true,            // 响应消息*
        status: true,                  // 响应状态码*
        timestamp_parsed: true,        // 结束时间*
        uuid: true                     // 数据包id*
      }
    })
    res.json({ code: 0, data: logs })
  } catch (error) {
    res.status(500).json({ code: 1, message: '获取攻击日志失败', error })
  }
}