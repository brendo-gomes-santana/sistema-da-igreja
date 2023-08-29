import { Request, Response } from "express";
import { RemoveLouvorService } from "../../service/Louvor/RemoveLouvorService";

class RemoveLouvorController{
    async remove(req:Request, res:Response){

        const id = req.query.id as string;
        const inicializado = new RemoveLouvorService();

        const removido = await inicializado.execute(id)

        return res.status(200).send(removido)
    }
}

export { RemoveLouvorController }