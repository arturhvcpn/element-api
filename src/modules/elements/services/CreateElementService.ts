import { IElementRepository } from "../repositories/IElementRepository";
import { collection, addDoc, DocumentReference } from "firebase/firestore";
import { firestoreDB } from "../db/db";

class CreateElementService {

    constructor(private elementRepository: IElementRepository){}
    
    async execute({name, atomicNumber, symbol}): Promise<DocumentReference>{
        const element = this.elementRepository.createTest({name, atomicNumber, symbol});

        const docRef = await addDoc(collection(firestoreDB, "elements"), { 
            name: element.name,
            atomicNumber: element.atomicNumber,
            symbol: element.symbol
        });

        return docRef;
    }

}

export { CreateElementService };