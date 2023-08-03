import { hash } from "bcryptjs";
import dotenv from 'dotenv';
import prisma from "../../prisma";

dotenv.config()

export interface CreateMusicoProps{
    nome: string,
    email: string,
    tipo: string,
}


class CreateMusicoService{
    async execute({ nome, email, tipo }:CreateMusicoProps){
        if(!nome || !email || !tipo){
            throw new Error('Preenchar todos os campos')
        }
        const existeMusico = await prisma.musico.findFirst({
            where: { email }
        })

        if(existeMusico){
            throw new Error('Email cadastrado')
        }

        const Criado = await prisma.musico.create({
            data: {
                nome, 
                email, 
                tipo,
                senha: await hash(process.env.SENHAMUSICO as string ,10)
            }
        })


        return Criado;
    }
}

export { CreateMusicoService }