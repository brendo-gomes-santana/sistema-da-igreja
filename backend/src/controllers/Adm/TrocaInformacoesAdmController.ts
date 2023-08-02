import { Request, Response } from 'express'
import { AtualizarAdmProps, TrocaDeInformacoesDoAdmService } from "../../service/Adm/TrocaDeInformacoesDoAdmService";


class TrocaInformacoesAdmController{
    async atualizar(req: Request, res: Response){
        const { id, nome, email, senha } = req.body as AtualizarAdmProps;

        const inicializacao = new TrocaDeInformacoesDoAdmService()
        const atualizando = await inicializacao.execute({
            id,
            nome,
            email,
            senha
        })

        return res.json(atualizando)
    }    
}

export { TrocaInformacoesAdmController }