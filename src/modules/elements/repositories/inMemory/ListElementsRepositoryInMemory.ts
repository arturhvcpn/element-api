import { ElementModel } from "../../model/ElementModel";
import { IElementRepository, ITest } from "../IElementRepository";

class ListElementsRepositoryInMemory implements IElementRepository {
  private elements: ElementModel[]

  constructor(){
    this.elements = dataElements;
  }
  createTest({ name, atomicNumber, symbol }: ITest): ElementModel {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<ElementModel[]> {
    const all = this.elements;

    return all as ElementModel[];
  }

  async findByName(name: string): Promise<ElementModel> {
    const element = this.elements.find(element => element.name === name);
    
    return element;
  }

  async findBySymbol(symbol: string): Promise<ElementModel> {
    const element = this.elements.find(element => element.symbol === symbol);
    
    return element;
  }

  async findByAtomicNumber(atomicNumber: number): Promise<ElementModel> {
    const element = this.elements.find(element => element.atomicNumber === atomicNumber);
    
    return element;
  }
}

const dataElements: ElementModel[] = 
[
	{
		"name": "Hidrogênio",
		"symbol": "H",
		"atomicNumber": 1
	},
	{
		"name": "Hélio",
		"symbol": "He",
		"atomicNumber": 2
	},
	{
		"name": "Lítio",
		"symbol": "Li",
		"atomicNumber": 3
	},
	{
		"name": "Berílio",
		"symbol": "Be",
		"atomicNumber": 4
	},
	{
		"name": "Boro",
		"symbol": "B",
		"atomicNumber": 5
	},
	{
		"name": "Carbono",
		"symbol": "C",
		"atomicNumber": 6
	},
	{
		"name": "Nitrogênio",
		"symbol": "N",
		"atomicNumber": 7
	}
]

export { ListElementsRepositoryInMemory, dataElements };