import { ElementModel } from "../model/ElementModel";

export interface ITest {
    name: string;
    atomicNumber: number;
    symbol: string;
}

interface IElementRepository {
    list(): Promise<ElementModel[]>;
    findByName(name: string): Promise<ElementModel>;
    findBySymbol(symbol: string): Promise<ElementModel>;
    findByAtomicNumber(atomicNumber: number): Promise<ElementModel>;
    createTest({name, atomicNumber, symbol}:ITest): ElementModel;
}

export { IElementRepository };