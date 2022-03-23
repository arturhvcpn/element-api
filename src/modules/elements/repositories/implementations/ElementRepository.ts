import { ElementModel } from "../../model/ElementModel";
import { IElementRepository, ITest } from "../IElementRepository";
import { collection, getDocs, QuerySnapshot, CollectionReference, DocumentData } from "firebase/firestore";
import { firestoreDB } from "../../db/db";

class ElementRepository implements IElementRepository {

    private elements: ElementModel[] | QuerySnapshot<DocumentData>;
    private collection: CollectionReference<DocumentData>;

    private static INSTANCE: ElementRepository;

    private constructor(){
        this.collection = collection(firestoreDB, 'elements');
        this.elements = [];
    }

    public static getInstance(): ElementRepository{
        if(!ElementRepository.INSTANCE){
            ElementRepository.INSTANCE = new ElementRepository();
        }

        return ElementRepository.INSTANCE;
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

    async list(): Promise<ElementModel[]> {
        const instance = await (await getDocs(this.collection)).docs.map(element => {
            return {...element.data()}
        });

        this.elements = instance;
        
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