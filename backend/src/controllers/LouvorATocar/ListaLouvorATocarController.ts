import { Request, Response } from 'express';
import { ListaLouvorATocarService } from '../../service/LouvorATocar/ListaLouvorATocarService';

class ListaLouvorATocarController{
    async handle(req:Request, res:Response){

        const id_agendamento = req.query.id_agendamento as string;
        
        const inicializacao = new ListaLouvorATocarService()
        const lista = await inicializacao.execute(id_agendamento)

        return res.status(200).send(lista)
    }
}

export { ListaLouvorATocarController }