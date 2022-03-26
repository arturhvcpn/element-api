import { ListElementsService } from "../../services/ListElementsService";
import { dataElements, ListElementsRepositoryInMemory } from "../../repositories/inMemory/ListElementsRepositoryInMemory";
import { ElementModel } from "../../model/ElementModel";
import { logger } from "../../../../utils/Logger";


let listElementsUseCase: ListElementsService;
let listElementsReposityInMemory: ListElementsRepositoryInMemory;

describe('List elements and list element with filter', () =>{

  beforeEach(() => {
    listElementsReposityInMemory = new ListElementsRepositoryInMemory();
    listElementsUseCase = new ListElementsService(listElementsReposityInMemory);
  });
  
  it('it should be list all elements', async () =>{
    const all = await listElementsReposityInMemory.list();

    expect(all).toBe(dataElements);
    expect(all.length).toBe(dataElements.length);
  });

  it('it should be find by name', async () =>{
    const element = await listElementsReposityInMemory.findByName('Carbono')
    
    expect(element).toStrictEqual({
      "name": "Carbono", 
      "symbol": "C",
      "atomicNumber": 6
    });
  });

  it('it should be find by symbol', async () =>{
    const element = await listElementsReposityInMemory.findBySymbol('H');

    expect(element).toStrictEqual({
      "name": "Hidrogênio", 
      "symbol": "H",
      "atomicNumber": 1
    });
  });

  it('it should be find by atomic number', async () =>{
    const element = await listElementsReposityInMemory.findByAtomicNumber(3);

    expect(element).toStrictEqual({
      "name": "Lítio", 
      "symbol": "Li",
      "atomicNumber": 3
    });
  });
});

