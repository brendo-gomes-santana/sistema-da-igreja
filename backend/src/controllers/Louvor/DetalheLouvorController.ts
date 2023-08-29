import { Request, Response } from 'express';
import { detalheLouvorService } from '../../service/Louvor/detalheLouvorService';

class DetalheLouvorController{
    async handle(req:Request, res:Response){

        const id = req.query.id as string;
        
        const inicializacao = new detalheLouvorService()
        const detalhes = await inicializacao.execute(id)

        return res.status(200).send(detalhes)

    }
}

export { DetalheLouvorController }