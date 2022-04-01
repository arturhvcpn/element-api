import { ElementImageService } from "../services/ElementImageService";

class ElementImageController {
  constructor(private elementImageService: ElementImageService){}

  async handle(request, response): Promise<Response>{
    const uploadImage = await this.elementImageService.execute();

    return response.json(uploadImage);
  }
}

export { ElementImageController };