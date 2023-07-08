import { Request, Response } from "express";
import { CreateAgendamentoService, CreateAgendamentoProps } from "../../service/Agendamento/CreateAgendamentoService";

class CreateAgendamentoController {
    async create(req: Request, res: Response) {

        const { data, horario_para_chegar, descricao } = req.body as CreateAgendamentoProps;

        const inicializacao = new CreateAgendamentoService()
        const criado = await inicializacao.execute({
            data,
            horario_para_chegar,
            descricao
        })

        return res.json(criado)
    }
}

export { CreateAgendamentoController }