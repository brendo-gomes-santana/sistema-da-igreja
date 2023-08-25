import { Request, Response } from 'express';
import { TrocaDeInformacoesMusicoService } from '../../service/musico/TrocaDeInformacoesMusicoService';

interface TrocaInformacoesMusicoProps{
    email?: string,
    senha?: string,
    codigo?: string,
}

class TrocaDeInformacoesMusicoController{
    async update(req: Request, res: Response){

        const id_musico = req.query.id_musico as string
        const { email, senha, codigo } = req.body as TrocaInformacoesMusicoProps
        
        const inicializacao = new TrocaDeInformacoesMusicoService()
        const atualizando = await inicializacao.execute(
            id_musico,
            email,
            senha,
            codigo
        )

        return res.json(atualizando)

    }
}

export { TrocaDeInformacoesMusicoController }