import { ElementModel } from "../model/ElementModel";
import { IElementRepository } from "../repositories/IElementRepository";

class ListElementsService {

    constructor(private elementRepository: IElementRepository){}
    
    async execute():Promise<ElementModel[]> {
        const elements = await this.elementRepository.list();
        return elements;
    }

}

export { ListElementsService };