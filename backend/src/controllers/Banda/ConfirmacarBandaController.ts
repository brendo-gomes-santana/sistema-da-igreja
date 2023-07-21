import { Request, Response } from 'express';
import { ConfirmarBandaService } from '../../service/Banda/ConfirmarBandaService';

class ConfirmacarBandaController{
    async handle(req:Request, res:Response){
        const id_agendamento = req.query.id_agendamento as string;
        const confirmacao = req.body.confirmacao as boolean;

        const inicializacao = new ConfirmarBandaService();
        const atualizando = await inicializacao.execute(id_agendamento, confirmacao)

        return res.json(atualizando)
    }
}

export { ConfirmacarBandaController }