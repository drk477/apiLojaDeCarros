import { Router } from 'express';
import CarroController from '../controllers/CarroController';

const router = new Router();

router.get('/', CarroController.index);
router.post('/', CarroController.store);

export default router;
