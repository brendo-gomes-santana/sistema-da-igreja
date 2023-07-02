import { hash } from "bcryptjs";
import dotenv from 'dotenv';
import prisma from "../../prisma";

dotenv.config()

export interface CreateMusicoProps{
    nome: string,
    email: string,
}


class CreateMusicoService{
    async execute({ nome, email }:CreateMusicoProps){
        if(!nome || !email){
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
                senha: await hash(process.env.SENHAMUSICO as string ,10)
            }
        })


        return Criado;
    }
}

export { CreateMusicoService }