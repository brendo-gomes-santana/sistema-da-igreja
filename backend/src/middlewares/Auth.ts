import { Request, Response, NextFunction } from "express";

export function Jwt(
    req: Request, 
    res: Response,
    next: NextFunction){

        const token = req.headers.authorization;

        if(!token){
            return res.status(401).send({
                error: 'Informe seu token'
            })
        }
        
        next()
}