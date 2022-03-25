import { Request, Response } from "express";
import { logger } from "../../../utils/Logger";
import { ListElementsService } from "../services/ListElementsService";

class ListElementsController{
    constructor(private listElementsService: ListElementsService){}

    async handle(request: Request, response: Response): Promise<Response>{
        const elements =  await this.listElementsService.execute();
        
        return response.json(elements);
    }

    async hand(request: Request, response: Response): Promise<Response>{
        const { atomicnumber } = request.params;

        const param = parseInt(atomicnumber);

        const element = await this.listElementsService.exe(param);

        if (element === null) {
            return response.status(404).json({ error: `Element with atomic number: ${atomicnumber} not found`});        
        }
        
        return response.json(element);
    }

    async ha(request: Request, response: Response): Promise<Response>{
        const { symbol } = request.params;

        const element = await this.listElementsService.e(symbol);

        if (element === null) {
            return response.status(404).json({ error: `Element with symbol: ${symbol} not found`});
        }
        
        return response.json(element);
    }

    async h(request: Request, response: Response): Promise<Response>{
        const { name } = request.params;

        const element = await this.listElementsService.ex(name);

        if (element === null) {
            return response.status(404).json({ error: `Element with symbol: ${name} not found`});
        }
        
        return response.json(element);
    }
}

export { ListElementsController };