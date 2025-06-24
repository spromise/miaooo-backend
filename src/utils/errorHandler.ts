import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[${new Date().toISOString()}] ${req.method} ${req.path} - ${err.stack}`)
  
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  const message = process.env.NODE_ENV === 'production' 
    ? '服务器错误' 
    : err.message
    
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: `路由不存在: ${req.method} ${req.originalUrl}`
  })
}