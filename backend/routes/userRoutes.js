import express from 'express'
import { authUser,getUserPrfile,registerUser } from '../controllers/userController.js'
import {protect} from '../middleware/authmiddleware.js'




const router=express.Router()

router.post('/login',authUser)
router.route('/profile').get(protect,getUserPrfile)
router.route('/').post(registerUser)


export default router  