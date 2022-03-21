import { Router } from 'express';
import { elementsRouter } from './elements.routes';

const router = Router();

router.use('/api/elements', elementsRouter);

export { router };