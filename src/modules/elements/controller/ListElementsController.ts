import { Request, Response } from "express";
import { ListElementsService } from "../services/ListElementsService";

class ListElementsController{
    constructor(private listElementsService: ListElementsService){}

    async handleListAll(request: Request, response: Response): Promise<Response>{
        const elements =  await this.listElementsService.executeListAll();
        
        return response.json(elements);
    }

    async handleFilterByAtomicNumber(request: Request, response: Response): Promise<Response>{
        const { atomicnumber } = request.params;

        const param = parseInt(atomicnumber);

        const element = await this.listElementsService.executeFindByAtomicNumber(param);

        if (element === null) {
            return response.status(404).json({ error: `Element with atomic number: ${atomicnumber} not found`});        
        }
        
        return response.json(element);
    }

    async handleFilterBySymbol(request: Request, response: Response): Promise<Response>{
        const { symbol } = request.params;

        const element = await this.listElementsService.executeFindBySymbol(symbol);

        if (element === null) {
            return response.status(404).json({ error: `Element with symbol: ${symbol} not found`});
        }
        
        return response.json(element);
    }

    async handleFilterByName(request: Request, response: Response): Promise<Response>{
        const { name } = request.params;

        const element = await this.listElementsService.executeFindByName(name);

        if (element === null) {
            return response.status(404).json({ error: `Element with symbol: ${name} not found`});
        }
        
        return response.json(element);
    }
}

export { ListElementsController };