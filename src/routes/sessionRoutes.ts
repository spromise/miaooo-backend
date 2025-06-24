import { Router, RequestHandler } from 'express'
import { 
  createSession, 
  getSessionById, 
  getAllSessions,
  getSessionDurationStats
} from '../controllers/sessionController'

const router = Router()

router.post('/', createSession as RequestHandler)
router.get('/:id', getSessionById as RequestHandler)
router.get('/', getAllSessions as RequestHandler)
router.get('/stats/durations', getSessionDurationStats as RequestHandler)

export default router