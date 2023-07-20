import { Request, Response } from 'express';
import { createLouvorService, CreateLouvorProps } from '../../service/Louvor/createLouvorService';

class CreateLouvorController{
    async create(req: Request, res: Response){

        const { nome, letra, link, tom } = req.body as CreateLouvorProps;
        
        const inicializado = new createLouvorService();
        const criado = await inicializado.execute({ nome, letra, link, tom })

        return res.json(criado);
    }
}
export { CreateLouvorController }