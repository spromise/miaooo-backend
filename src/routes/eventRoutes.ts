import { Router, RequestHandler } from 'express'
import { 
  createEvent, 
  getEventById, 
  getAllEvents,
  getEventStats
} from '../controllers/eventController'

const router = Router()

router.post('/', createEvent as RequestHandler)
router.get('/:id', getEventById as RequestHandler)
router.get('/', getAllEvents as RequestHandler)
router.get('/stats/summary', getEventStats as RequestHandler)

export default router