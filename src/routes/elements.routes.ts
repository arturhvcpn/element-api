import { Router } from 'express';
import { createElementsController } from '../modules/elements/useCases/createElement';
import { listElementsController } from '../modules/elements/useCases/listElements';

const elementsRouter = Router();

elementsRouter.get('/all', (request, response) => {
    return listElementsController.handle(request, response);
});

elementsRouter.post('/create', (request, response) => {
    return createElementsController.handle(request, response);
});

export { elementsRouter };