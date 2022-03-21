import { ElementModel } from "../../model/ElementModel";
import { IElementRepository, ITest } from "../IElementRepository";


class ElementRepository implements IElementRepository {

    private elements: ElementModel[];

    constructor(){
        this.elements = [];
    }

    createTest({name, atomicNumber, symbol}:ITest): ElementModel {
        const element = new ElementModel();

        Object.assign(element, { 
            name,
            atomicNumber,
            symbol,
        })

        return element;
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