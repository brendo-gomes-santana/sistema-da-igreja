import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

export async function IsAdm(req: Request, res: Response, next: NextFunction){
    const id_adm = req.query.id_adm as string


    if(!id_adm){
        return res.status(401).json({
            error: 'VocÇe não informou o id_adm'
        })
    }

    const isAdm = await prisma.adm.findFirst({
        where: { id: id_adm }
    })


    if(!isAdm){
        return res.status(401).json({
            error: 'Você não faz parte da equipe de adm'
        })

    }

    next()
}