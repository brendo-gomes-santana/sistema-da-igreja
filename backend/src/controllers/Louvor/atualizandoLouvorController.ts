import { Request, Response } from 'express';
import { atualizarLouvorService, AtualizarLouvorProps } from '../../service/Louvor/atualizarLouvorService';
class atualizandoLouvorController{
    async handle(req:Request, res:Response){

        const { id, letra, link, nome, tom } = req.body as AtualizarLouvorProps

        const inicializacao = new atualizarLouvorService()
        const atualizado = await inicializacao.execute({ id, letra, link, nome, tom })

        return res.status(200).send(atualizado);
    }
}

export { atualizandoLouvorController }