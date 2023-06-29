import prisma from "../../prisma";

import { hash } from 'bcryptjs';


import dotenv from 'dotenv'
dotenv.config()

export interface CreateAdmProps {
    nome: string,
    email: string,
    senha: string,
    codigo: string
}

class CreateAdmService{
    async execute({
        nome,
        email,
        senha,
        codigo
    }: CreateAdmProps){
        
        if(!nome || !senha || !email || !codigo){
            throw new Error('Preenchar todos os campo')
        }

        if(codigo !== process.env.CODIGO){
            throw new Error('Codigo Incorreto')
        }

        const ExisteAdm = await prisma.adm.findFirst({
            where: { email }
        })

        if(ExisteAdm){
            throw new Error('E-mail já foi cadastrado')
        }

        const criado = await prisma.adm.create({
            data: {
                nome,
                email,
                senha: await hash(senha, 10)
            },
            select: {
                id:true,
                nome:true,
                email:true
            }
        })

        return criado;

    }
}

export { CreateAdmService }