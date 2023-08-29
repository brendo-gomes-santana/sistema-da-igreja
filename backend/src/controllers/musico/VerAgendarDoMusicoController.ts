import { Request, Response } from 'express';
import { VerAgendarDoMusicoService } from '../../service/musico/VerAgendarDoMusicoService';

class VerAgendarDoMusicoController{
    async handle(req:Request, res:Response){

        const id = req.query.id as string;

        const inicializacao = new VerAgendarDoMusicoService();
        const lista = await inicializacao.execute(id)

        return res.status(200).send(lista)
    }
}

export { VerAgendarDoMusicoController }