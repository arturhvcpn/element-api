import { ListElementsService } from "../../services/ListElementsService";
import { ElementRepository } from "../../repositories/implementations/ElementRepository";
import { dataElements } from "../../repositories/inMemory/ListElementsRepositoryInMemory";

let listElementsService: ListElementsService;

describe('List elements and list element with filter', () =>{

  beforeEach(() => {
    let elementRepository = ElementRepository.getInstance();
    listElementsService = new ListElementsService(elementRepository);
  });
  
  it('it should be list all elements', async () =>{
    const all = await listElementsService.executeListAll();

    expect(all).toStrictEqual(dataElements);
    expect(all.length).toBe(dataElements.length);
  });

  it('it should be find by name', async () =>{
    const element = await listElementsService.executeFindByName('Carbono')
    
    expect(element).toStrictEqual([{
      "name": "Carbono", 
      "symbol": "C",
      "atomicNumber": 6
    }]);
  });

  it('it should be find by symbol', async () =>{
    const element = await listElementsService.executeFindBySymbol('H');

    expect(element).toStrictEqual([{
      "name": "Hidrogênio", 
      "symbol": "H",
      "atomicNumber": 1
    }]);
  });

  it('it should be find by atomic number', async () =>{
    const element = await listElementsService.executeFindByAtomicNumber(3);

    expect(element).toStrictEqual([{
      "name": "Lítio", 
      "symbol": "Li",
      "atomicNumber": 3
    }]);
  });
});

