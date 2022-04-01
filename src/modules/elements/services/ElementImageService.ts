import { IElementImageRepository } from "../repositories/IElementImagesRepository";

class ElementImageService {
  constructor(private elementImageService: IElementImageRepository){}

  async execute(): Promise<void>{
    const uploadImage = await this.elementImageService.uploadImage();

    return uploadImage;
  }
}

export { ElementImageService };