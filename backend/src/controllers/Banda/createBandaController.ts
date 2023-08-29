import { Request, Response } from "express";
import { CreateBandaService } from "../../service/Banda/createBandaService";

class CreateBandaController {
    async create(req: Request, res: Response) {
        const { id_musico, id_agendamento } = req.query;

        const inicializado = new CreateBandaService()
        const criado = await inicializado.execute(id_musico as string, id_agendamento as string)
        return res.status(200).send(criado)
    }
}

export { CreateBandaController }