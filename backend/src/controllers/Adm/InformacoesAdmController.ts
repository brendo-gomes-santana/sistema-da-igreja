import { Request, Response } from "express";
import { InformacoesAdmService } from "../../service/Adm/InformacoesAdmService";

class InformacoesAdmController{
    async handle(req: Request, res: Response){

        const id_adm = req.query.id_adm as string

        const inicializacao = new InformacoesAdmService()
        const dados = await inicializacao.execute(id_adm)

        return res.status(200).send(dados);
    }
}

export { InformacoesAdmController }