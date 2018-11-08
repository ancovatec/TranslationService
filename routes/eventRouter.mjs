import { getEvents } from '../controllers/eventsController';
import express from 'express';
const router = express.Router();

const route = router.route('/events');

route.get(getEvents);

export default router;