import { Request, Response } from 'express'
import { AtualizarAdmProps, TrocaDeInformacoesDoAdmService } from "../../service/Adm/TrocaDeInformacoesDoAdmService";


class TrocaInformacoesAdmController{
    async atualizar(req: Request, res: Response){
        const { id_adm, nome, email, senha } = req.body as AtualizarAdmProps;

        const inicializacao = new TrocaDeInformacoesDoAdmService()
        const atualizando = await inicializacao.execute({
            id_adm,
            nome,
            email,
            senha
        })

        return res.json(atualizando)
    }    
}

export { TrocaInformacoesAdmController }