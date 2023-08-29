import { Request, Response } from "express";

import { CreateAdmService, CreateAdmProps } from "../../service/Adm/CreateAdmService";


class CreateAdmController{
    async create(req: Request, res: Response){

        const { nome, email, senha, codigo } = req.body as CreateAdmProps

        const inicializacao = new CreateAdmService()
        const criado = await inicializacao.execute({
            nome,
            email,
            senha,
            codigo
        })

        return res.status(200).send(criado)
    }
}

export { CreateAdmController }