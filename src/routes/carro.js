import { Router } from 'express';
import CarroController from '../controllers/CarroController';

const router = new Router();

router.get('/', CarroController.index);
router.post('/', CarroController.store);
router.get('/:id', CarroController.show);
router.delete('/:id', CarroController.delete);
router.put('/:id', CarroController.update);

export default router;
