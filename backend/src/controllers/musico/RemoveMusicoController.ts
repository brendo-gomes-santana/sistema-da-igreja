import { Request, Response } from "express";
import { RemoveMusicoService } from "../../service/musico/RemoveMusicoService";

class RemoveMusicoController{

    async handle(req: Request, res: Response){
        
        const id_musico = req.query.id_musico as string

        const inicializacao = new RemoveMusicoService()
        const removido = await inicializacao.execute(id_musico)

        return res.status(200).send(removido)

    }

}

export { RemoveMusicoController }