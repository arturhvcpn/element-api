import { Request, Response } from "express";
import { ListElementsService } from "../services/ListElementsService";

class ListElementsController{
    constructor(private listElementsService: ListElementsService){}

    async handle(request: Request, response: Response): Promise<Response>{
        const elements =  await this.listElementsService.execute();
        
        return response.json(elements);
    }
}

export { ListElementsController };