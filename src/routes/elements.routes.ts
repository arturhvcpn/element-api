import { Router } from 'express';
import { listElementsController } from '../modules/useCases/listElements';

const elementsRouter = Router();

elementsRouter.get('/', (request, response) => {
    return listElementsController.handle(request, response);
});

export { elementsRouter };