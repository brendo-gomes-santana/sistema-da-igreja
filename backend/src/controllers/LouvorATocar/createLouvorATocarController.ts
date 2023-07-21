import { Request, Response } from 'express';
import { cretateLouvorATocarService } from '../../service/LouvorATocar/cretateLouvorATocarService';

class createLouvorATocarController {
    async handle(req: Request, res: Response) {

        const id_agendamento = req.query.id_agendamento as string
        const id_louvor = req.query.id_louvor as string

        const inicializacao = new cretateLouvorATocarService()
        const criado = await inicializacao.execute({ id_agendamento, id_louvor })

        return res.json(criado)
    }
}

export { createLouvorATocarController }