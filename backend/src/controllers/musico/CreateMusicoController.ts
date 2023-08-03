import { Request, Response } from "express";
import { CreateMusicoProps, CreateMusicoService } from "../../service/musico/CreateMusicoService";


class CreateMusicoController{
    async create(req: Request, res:Response){

        const { nome, email, tipo } = req.body as CreateMusicoProps

        const inicializacao = new CreateMusicoService()
        const criadoMusico = await inicializacao.execute({
            nome,
            email,
            tipo
        })

        return res.json(criadoMusico)
    }
}

export { CreateMusicoController }