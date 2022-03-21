import { ElementRepository } from '../../repositories/implementations/ElementRepository';
import { CreateElementsController } from '../../controller/CreateElementsController';
import { CreateElementService } from '../../services/CreateElementService';

const elementRepository = new ElementRepository();
const createElementsService = new CreateElementService(elementRepository);
const createElementsController = new CreateElementsController(createElementsService);

export { createElementsController };