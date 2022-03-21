import { ElementModel } from "../../model/ElementModel";
import { IElementRepository } from "../IElementRepository";


class ElementRepository implements IElementRepository {

    private elements: ElementModel[];

    private constructor(){
        this.elements = [];
    }

    create(): ElementModel[] {
        const element = new ElementModel();
        return this.elements;
    }

    list(): ElementModel[] {
        return this.elements;
    }

    findByName(name: string): ElementModel {
        const element = this.elements.find(element => element.name === name);

        // procurar uma solução melhor
        return element!;
    }

    findBySymbol(symbol: string): ElementModel {
        const element = this.elements.find(element => element.symbol === symbol);

        // procurar uma solução melhor
        return element!;
    }

    findByAtomicNumber(atomicNumber: number): ElementModel {
        const element = this.elements.find(element => element.atomicNumber === atomicNumber);

        // procurar uma solução melhor
        return element!;
    }

}

export { ElementRepository };