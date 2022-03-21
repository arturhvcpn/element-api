import { CreateElementService } from "../services/CreateElementService";

class CreateElementsController{
    constructor(private createElementService : CreateElementService ){}

    async handle(request,response){
        const { name, atomicNumber, symbol } = request.body;

        await this.createElementService.execute({name,atomicNumber, symbol});

        return response.status(201).send();
    }
}

export { CreateElementsController };