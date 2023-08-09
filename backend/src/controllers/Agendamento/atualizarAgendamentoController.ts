import { Request, Response } from "express";
import { atualizarAgendamentoService, atualizarAgendamentoProps } from "../../service/Agendamento/AtualizarAgendamentoService";

class atualizarAgendamentoController{
    async handle(req: Request, res: Response){

        const {
            id, 
            dia,
            horario_para_cheagar,
            descricao,
            confirmacao
        } = req.body as atualizarAgendamentoProps;

        const inicializacao = new atualizarAgendamentoService()
        const atualizado = await inicializacao.execute({
            id, 
            dia,
            horario_para_cheagar,
            descricao,
            confirmacao
        })

        return res.json(atualizado)
    }
}

export { atualizarAgendamentoController }