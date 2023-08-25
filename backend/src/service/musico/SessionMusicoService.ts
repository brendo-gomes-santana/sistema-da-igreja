import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import dotenv from 'dotenv';

import prisma from "../../prisma";

dotenv.config()

class SessionMusicoService{
    async execute(email:string, senha: string){

        if(!email || !senha){
            throw new Error('Preencha os campos')
        }

        const musico = await prisma.musico.findFirst({
            where: { email }
        })

        if(!musico){
            throw new Error('Usuário não existe')
        }

        const senhaCerta = await compare(senha, musico.senha)

        if(!senhaCerta){
            throw new Error('Senha incorrenta')
        }

        const token = sign(
            {
                nome: musico.nome,
                email: musico.email
            },
            process.env.JWT as string,
            {
                subject: musico.id,
                expiresIn: '15d'
            }
        )

        return {
            id: musico.id,
            nome: musico.nome,
            email: musico.email,
            codigo: musico.codigo,
            token
        }
    }   
}

export { SessionMusicoService }