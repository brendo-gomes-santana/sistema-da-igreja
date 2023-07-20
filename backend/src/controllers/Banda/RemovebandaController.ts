import { Request, Response } from 'express'
import { RemoveBandaService } from '../../service/Banda/removeBandaService'

class RemoveBandaController{
    async remove(req: Request, res: Response){

        const id = req.query.id as string

        const inicializacao = new RemoveBandaService()
        const removido = await inicializacao.execute(id)

        return res.json(removido)
    }
}

export { RemoveBandaController }