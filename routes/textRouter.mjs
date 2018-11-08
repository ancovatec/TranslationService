import { addText, getTexts } from '../controllers/textsController';
import express from 'express';
const router = express.Router();

const route = router.route('/texts');

route.get(getTexts);
route.post(addText);


export default router;