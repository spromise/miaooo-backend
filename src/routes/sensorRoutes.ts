import { Router, RequestHandler } from 'express'
import { 
  createSensor, 
  getSensorById, 
  getAllSensors,
  getPortUsage
} from '../controllers/sensorController'

const router = Router()

router.post('/', createSensor as RequestHandler)
router.get('/:id', getSensorById as RequestHandler)
router.get('/', getAllSensors as RequestHandler)
router.get('/stats/ports', getPortUsage as RequestHandler)

export default router