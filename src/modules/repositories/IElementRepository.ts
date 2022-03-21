import { ElementModel } from "../model/ElementModel";

interface IElementRepository {
    list(): ElementModel[];
    findByName(name: string): ElementModel;
    findByAtomicNumber(atomicNumber: number): ElementModel;
    findBySymbol(symbol: string): ElementModel;
}

export { IElementRepository };