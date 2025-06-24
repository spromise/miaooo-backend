import { Router, RequestHandler } from 'express'
import { 
  createAuthRecord, 
  getAuthRecordById, 
  getAllAuthRecords,
  getTopUsernames
} from '../controllers/authController'

const router = Router()

router.post('/', createAuthRecord as RequestHandler)
router.get('/:id', getAuthRecordById as RequestHandler)
router.get('/', getAllAuthRecords as RequestHandler)
router.get('/stats/usernames', getTopUsernames as RequestHandler)

export default router