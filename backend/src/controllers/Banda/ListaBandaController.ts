import { Request, Response } from 'express'
import { ListaBandaService } from '../../service/Banda/ListaBandaService'

class ListaBandaController{
    async show(req: Request, res:Response){

        const id_agendamento = req.query.id_agendamento as string

        const inicializacao = new ListaBandaService()
        const lista = await inicializacao.execute(id_agendamento)

        return res.status(200).send(lista)

    }
}
export { ListaBandaController }