import { ElementImageRepository } from '../../repositories/implementations/ElementImageRepository';
import { ElementImageService } from '../../services/ElementImageService';
import { ElementImageController } from '../../controller/ElementImageController';

const elementImageRepository = new ElementImageRepository();
const elementImageService = new ElementImageService(elementImageRepository);
const elementImageController = new ElementImageController(elementImageService);

export { elementImageController };
