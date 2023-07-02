import {Request, Response } from "express";
import { ListagemMusicoService } from "../../service/musico/ListagemMusicoService";

class ListagemMusicoController{
    async show(_: Request ,res:Response){

        const inicializacao = new ListagemMusicoService()
        const lista = await inicializacao.execute()

        return res.json(lista)

    }
}

export { ListagemMusicoController }