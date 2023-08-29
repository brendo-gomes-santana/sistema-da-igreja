import { Request, Response } from "express";

import { ListaAgendamentoService } from "../../service/Agendamento/ListaAgendamentoService";

class ListaAgendamentoController{
    async show(req: Request, res:Response){

        const inicializacao = new ListaAgendamentoService()
        const lista = await inicializacao.execute()
        
        return res.status(200).send(lista)
    }
}
export { ListaAgendamentoController }