import { Request, Response } from 'express'
import { detalheAgendamentoService } from '../../service/Agendamento/detalheAgendamentoService'

class detalheAgendamentoController{
    async detalhe(req: Request, res: Response){

        const id = req.query.id as string

        const inicializacao = new detalheAgendamentoService()
        const detalhe = await inicializacao.execute(id)

        return res.status(200).send(detalhe)
    }
}

export { detalheAgendamentoController }