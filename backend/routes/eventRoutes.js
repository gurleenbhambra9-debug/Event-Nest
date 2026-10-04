import express from 'express'
import { createEvent, deleteEvent, readEvents, readSingleEvent, updateEvent } from '../controller/eventController.js'
import { authMiddle } from '../middleware/authMiddleware.js';
const router=express.Router()

router.post('/event', authMiddle, createEvent)
router.get('/event', authMiddle, readEvents)
router.get('/event/:id', authMiddle,readSingleEvent)
router.put('/event/:id', authMiddle, updateEvent)
router.delete('/event/:id', authMiddle, deleteEvent)
export default router;