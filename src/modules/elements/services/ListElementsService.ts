import { ElementModel } from "../model/ElementModel";
import { IElementRepository } from "../repositories/IElementRepository";

class ListElementsService {

    constructor(private elementRepository: IElementRepository){}
    
    async execute():Promise<ElementModel[]> {
        const elements = await this.elementRepository.list();
        return elements;
    }

    async exe(atomicnumber:number):Promise<ElementModel> {
        const elements = await this.elementRepository.findByAtomicNumber(atomicnumber);
        return elements;
    }

    async e(symbol:string):Promise<ElementModel> {
        const elements = await this.elementRepository.findBySymbol(symbol);
        return elements;
    }

    async ex(name:string):Promise<ElementModel> {
        const elements = await this.elementRepository.findByName(name);
        return elements;
    }

}

export { ListElementsService };