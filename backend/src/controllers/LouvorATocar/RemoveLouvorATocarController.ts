import { Request, Response } from 'express';
import { RemoveLouvorATocarService } from '../../service/LouvorATocar/RemoveLouvorATocarService';

class RemoveLouvorATocarController{
    async delete(req:Request, res:Response){
        const id = req.query.id as string;

        const inicializacao = new RemoveLouvorATocarService()
        const removido = await inicializacao.execute(id)

        return res.status(200).send(removido)
    }
}

export { RemoveLouvorATocarController }