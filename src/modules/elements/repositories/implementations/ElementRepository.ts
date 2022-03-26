import { ElementModel } from "../../model/ElementModel";
import { IElementRepository, ITest } from "../IElementRepository";
import { collection, getDocs, query, orderBy, DocumentData, Query, CollectionReference } from "firebase/firestore";
import { firestoreDB } from "../../db/db";
import { logger } from "../../../../utils/Logger";

class ElementRepository implements IElementRepository {

    private elements: ElementModel[];
    private collection: Query<DocumentData>;
    private readonly elementsCollectionRef: CollectionReference<DocumentData> = collection(firestoreDB, 'elements');

    private static INSTANCE: ElementRepository;

    private constructor(){
        this.elements = [];
        this.collection = query(this.elementsCollectionRef, orderBy('atomicNumber'));
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
        try {
            const elements: ElementModel[] = await (await getDocs(this.collection)).docs.map(element => {
                return {
                    name: element.data().name,
                    symbol: element.data().symbol,
                    atomicNumber: element.data().atomicNumber
                }});
            
            return elements;
        } catch (error) {
            logger.error(`Error: ${error}`)
        }
    }

    async findByName(name: string): Promise<ElementModel> {
        try {
            const elementFiltered: ElementModel[] = [];
            const elements = await (await getDocs(this.collection)).docs.map(element => {
                if(element.data().name === name){
                    elementFiltered.push({
                        name: element.data().name,
                        symbol: element.data().symbol,
                        atomicNumber: element.data().atomicNumber
                    });
                };
            });
    
            if (!elementFiltered.length) {
                return null;
            }
    
            const element: ElementModel = JSON.parse(JSON.stringify(elementFiltered))
    
            return element;
        } catch (error) {
            logger.error(`Error: ${error}`)
        }
    }

    async findBySymbol(symbol: string): Promise<ElementModel> {
        try {
            const elementFiltered : ElementModel[] = [];
            const elements = await (await getDocs(this.collection)).docs.map(element =>{
                if(element.data().symbol === symbol){
                    elementFiltered.push({
                        name: element.data().name,
                        symbol: element.data().symbol,
                        atomicNumber: element.data().atomicNumber
                    });
                };
            });
            
            if (!elementFiltered.length) {
                return null;
            }
    
            const element: ElementModel = JSON.parse(JSON.stringify(elementFiltered))
    
            return element;
        } catch (error) {
            logger.error(`Error: ${error}`)
        }
    }

    async findByAtomicNumber(atomicNumber: number): Promise<ElementModel> {
        try {
            const elementFiltered: ElementModel[] = [];
            const elements = await (await getDocs(this.collection)).docs.map(element => {
                if(element.data().atomicNumber === atomicNumber){
                    elementFiltered.push({
                        name: element.data().name,
                        symbol: element.data().symbol,
                        atomicNumber: element.data().atomicNumber
                    });
                };
            });

            if (!elementFiltered.length) {
                return null;
            }

            const element: ElementModel = JSON.parse(JSON.stringify(elementFiltered))

            return element;
        } catch (error) {
            logger.error(`Error: ${error}`)
        }
    }
}

export { ElementRepository };