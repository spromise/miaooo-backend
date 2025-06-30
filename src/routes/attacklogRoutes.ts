import { Router, RequestHandler } from 'express'
import { getAttackLogs } from '../controllers/attacklogController'

const router = Router()

router.get('/', getAttackLogs as RequestHandler)

export default router