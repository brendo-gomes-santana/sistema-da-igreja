import { Request, Response } from 'express'

import { SessionAdmService } from '../../service/Adm/SessionAdmService'

interface SessionsProps{
    email: string,
    senha: string
}

class SessionAdmController{
    async handle(req: Request, res: Response){

        const { email, senha } = req.body as SessionsProps

        const inicializacao = new SessionAdmService()
        const session = await inicializacao.execute(email, senha)

        return res.json(session)
    }
}

export { SessionAdmController }