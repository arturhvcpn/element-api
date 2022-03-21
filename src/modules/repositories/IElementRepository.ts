import { ElementModel } from "../model/ElementModel";

interface IElementRepository {
    list(): ElementModel[];
    findByName(name: string): ElementModel;
    findBySymbol(symbol: string): ElementModel;
    findByAtomicNumber(atomicNumber: number):  ElementModel;
}

export { IElementRepository };