import {Request, Response } from "express";
import { ListagemMusicoService } from "../../service/musico/ListagemMusicoService";

class ListagemMusicoController{
    async show(req: Request ,res:Response){

        const { nome, tipo } = req.body

        const inicializacao = new ListagemMusicoService()
        const lista = await inicializacao.execute(nome, tipo)

        return res.json(lista)

    }
}

export { ListagemMusicoController }