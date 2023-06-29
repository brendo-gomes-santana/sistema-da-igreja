import prisma from "../../prisma";

import { sign } from 'jsonwebtoken'

import dotenv from 'dotenv';
dotenv.config()

import { compare } from "bcryptjs";

class SessionAdmService{
    async execute(email:string, senha:string){
        if(!email || !senha){
            throw new Error('Preenchar os campos')
        }

        const adm = await prisma.adm.findFirst({
            where: { email }
        })

        if(!adm){
            throw new Error('Adm não existe')
        }

        const senhaCorreta = await compare(senha, adm.senha)
        if(!senhaCorreta){
            throw new Error('Senha incorreta')
        }

        const token = sign(
            {
                nome: adm.nome,
                email: adm.email
            },
            process.env.JWT as string,
            {
                subject: adm.id,
                expiresIn: '15d'
            }
        )
        
        return {
            id: adm.id,
            nome: adm.nome,
            email: adm.email,
            token
        }

    }
}

export { SessionAdmService }