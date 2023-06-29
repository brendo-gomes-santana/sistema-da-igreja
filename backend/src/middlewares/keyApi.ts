import { Request, Response, NextFunction } from "express";

import dotenv from 'dotenv'
dotenv.config()

export function apiKey(req: Request, res: Response, next: NextFunction){

    const api_key = req.query.api_key as string

    if(!api_key){
        return res.status(401).json({
            error: 'informe api_key'
        })
    }

    if(api_key !== process.env.API_KEY){
        return res.status(401).json({
            error: 'Api_key incorreta'
        })
    }

    next()
}


