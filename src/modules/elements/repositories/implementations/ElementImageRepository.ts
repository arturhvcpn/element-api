import { ref, uploadString } from "firebase/storage";
import { elements } from "../../../../utils/ElementsArray";
import { logger } from "../../../../utils/Logger";
import { storage } from "../../db/db";
import { IElementImageRepository } from "../IElementImagesRepository";

class ElementImageRepository implements IElementImageRepository {
  private elementImageRepository: IElementImageRepository;
  
  constructor(){}
  
  async uploadImage(): Promise<void> {
    for(let element of elements){
      const message = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
      const storageRef = ref(storage, `images/${element}/${message}`);
      
      await uploadString(storageRef, message, 'base64url')
      .then((snapshot) => {
        logger.info('Uploaded a base64url string!');
      })
      .catch((error) =>{
        logger.error(`Error, inspect: ${error}`)
      })
      .finally(() => {
        logger.info('Uploaded base64 with succefull!');
      });
    }
  }
}

export { ElementImageRepository };