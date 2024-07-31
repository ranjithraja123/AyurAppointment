import express from 'express'
import {authenticate} from '../auth/verifyToken.js'
import { getUserAppointments, getCheckout, getDoctorAppointments } from '../Controllers/bookingController.js'




const router = express.Router()
router.post('/book', authenticate,getCheckout)
router.get('/book/:userId', authenticate,getUserAppointments)
router.get('/book/doctor/:doctorId', authenticate,getDoctorAppointments)


export default router;