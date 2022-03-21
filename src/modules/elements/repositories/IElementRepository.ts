import { ElementModel } from "../model/ElementModel";

export interface ITest {
    name: string;
    atomicNumber: number;
    symbol: string;
}

interface IElementRepository {
    list(): ElementModel[];
    findByName(name: string): ElementModel;
    findBySymbol(symbol: string): ElementModel;
    findByAtomicNumber(atomicNumber: number):  ElementModel;
    createTest({name, atomicNumber, symbol}:ITest): ElementModel;
}

export { IElementRepository };