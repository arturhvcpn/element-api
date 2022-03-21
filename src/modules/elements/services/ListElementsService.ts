import { ElementModel } from "../model/ElementModel";
import { IElementRepository } from "../repositories/IElementRepository";

class ListElementsService {

    constructor(private elementRepository: IElementRepository){}
    
    execute(): ElementModel[]{
        return this.elementRepository.list();
    }

}

export { ListElementsService };