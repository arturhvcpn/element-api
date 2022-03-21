import { ElementModel } from "../../model/ElementModel";
import { IElementRepository } from "../IElementRepository";


class ElementRepository implements IElementRepository {

    private elements: ElementModel[];

    constructor(){
        this.elements = [];
    }
    
    list(): ElementModel[] {
        return this.elements;
    }

    findByName(name: string): ElementModel {
        const element = this.elements.find(element => element.name === name);

        return element;
    }

    findBySymbol(symbol: string): ElementModel {
        const element = this.elements.find(element => element.symbol === symbol);

        return element;
    }

    findByAtomicNumber(atomicNumber: number): ElementModel {
        const element = this.elements.find(element => element.atomicNumber === atomicNumber);

        return element;
    }

}

export { ElementRepository };