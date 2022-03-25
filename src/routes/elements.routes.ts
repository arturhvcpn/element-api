import { Router } from 'express';
import { createElementsController } from '../modules/elements/useCases/createElement';
import { listElementsController } from '../modules/elements/useCases/listElements';

const elementsRouter = Router();

elementsRouter.get('/all', (request, response) => {
    return listElementsController.handleListAll(request, response);
});

elementsRouter.get('/atomicnumber/:atomicnumber', (request, response) => {
    return listElementsController.handleFilterByAtomicNumber(request, response);
});

elementsRouter.get('/symbol/:symbol', (request, response) => {
    return listElementsController.handleFilterBySymbol(request, response);
});

elementsRouter.get('/name/:name', (request, response) => {
    return listElementsController.handleFilterByName(request, response);
});

elementsRouter.post('/create', (request, response) => {
    return createElementsController.handle(request, response);
});

export { elementsRouter };