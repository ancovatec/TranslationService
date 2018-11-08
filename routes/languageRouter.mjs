import { addLanguage, getLanguages } from '../controllers/languagesController';
import express from 'express';
const router = express.Router();

const route = router.route('/languages');

route.get(getLanguages);
route.post(addLanguage);


export default router;