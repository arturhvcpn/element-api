import { Request, Response } from "express";
import { ListElementsService } from "../services/ListElementsService";

class ListElementsController{
    constructor(private listElementsService: ListElementsService){}

    handle(request: Request, response: Response): Response{
        const elements = this.listElementsService.execute();
        
        return response.json(elements);
    }
}

export { ListElementsController };