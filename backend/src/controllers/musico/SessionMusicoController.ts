import { Request, Response } from "express";
import { SessionMusicoService } from "../../service/musico/SessionMusicoService";

interface SessionMusico {
    email: string,
    senha: string
}

class SessionMusicoController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body as SessionMusico

        const inicializacao = new SessionMusicoService()
        const logado = await inicializacao.execute(email, senha)


        return res.json(logado)
    }
}

export { SessionMusicoController }