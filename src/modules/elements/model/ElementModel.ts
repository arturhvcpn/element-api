import { v4 as uuidv4 } from 'uuid';

class ElementModel {
    name: string;
    atomicNumber: number;
    symbol: string;
    family?: string;
    description?: string;
    atomicMass?: number;

    constructor(){}
}

export { ElementModel }