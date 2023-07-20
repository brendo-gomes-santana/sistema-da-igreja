import { Request, Response } from "express";
import { RemoveLouvorService } from "../../service/Louvor/RemoveLouvorService";

class RemoveLouvorController{
    async remove(req:Request, res:Response){

        const id = req.query.id as string;
        const inicializado = new RemoveLouvorService();

        const removido = await inicializado.execute(id)

        return res.json(removido)
    }
}

export { RemoveLouvorController }