import { ElementModel } from "../model/ElementModel";
import { IElementRepository } from "../repositories/IElementRepository";

class ListElementsService {

    constructor(private elementRepository: IElementRepository){}
    
    async executeListAll():Promise<ElementModel[]> {
        const elements = await this.elementRepository.list();
        return elements;
    }

    async executeFindByAtomicNumber(atomicnumber:number):Promise<ElementModel> {
        const elements = await this.elementRepository.findByAtomicNumber(atomicnumber);
        return elements;
    }

    async executeFindBySymbol(symbol:string):Promise<ElementModel> {
        const elements = await this.elementRepository.findBySymbol(symbol);
        return elements;
    }

    async executeFindByName(name:string):Promise<ElementModel> {
        const elements = await this.elementRepository.findByName(name);
        return elements;
    }
}

export { ListElementsService };