import { Request, Response } from "express";
import { RemoveAgendamentoService } from "../../service/Agendamento/RemoveAgendamentoService";


class RemoveAgendamentoController{
    async remove(req: Request, res: Response){

        const id = req.query.id as string
        const inicializado = new RemoveAgendamentoService()
        const removido = await inicializado.execute(id)
        return res.json(removido)
    }
}
export { RemoveAgendamentoController }