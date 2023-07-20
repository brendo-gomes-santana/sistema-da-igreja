import { Request, Response } from 'express';
import { ListaLouvorService } from '../../service/Louvor/ListaLouvorService';

class ListaLouvorController{
    async show(req:Request, res:Response){

        const inicializacao = new ListaLouvorService();
        const lista = await inicializacao.execute()

        return res.json(lista)

    }
}

export { ListaLouvorController }