import { ElementRepository } from '../../repositories/implementations/ElementRepository';
import { ListElementsService } from '../../services/ListElementsService';
import { ListElementsController } from '../../controller/ListElementsController';

const elementRepository = new ElementRepository();
const listElementsService = new ListElementsService(elementRepository);
const listElementsController = new ListElementsController(listElementsService);

export { listElementsController };