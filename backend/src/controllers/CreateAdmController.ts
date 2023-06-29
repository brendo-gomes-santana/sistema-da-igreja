import { Request, Response } from "express";


class CreateAdmController{
    async create(req: Request, res: Response){

        res.json({ ok:true })
    }
}

export { CreateAdmController }