import prisma from "../../prisma";
import { hash } from "bcryptjs";

export interface AtualizarAdmProps{
    id: string,
    nome?: string,
    email?: string,
    senha?: string
}

class TrocaDeInformacoesDoAdmService{
    async execute({
        id,
        nome,
        email,
        senha
    }:AtualizarAdmProps){

        if(!id){
            throw new Error('id_adm não informado')
        }
        0
        const existeAdm = await prisma.adm.findFirst({
            where: { id }
        })

        if(!existeAdm){
            throw new Error('Usuário não existe')
        }
        const atulizado = await prisma.adm.update({
            where: { id },
            data: {
                nome,
                email,
                senha: senha && await hash(senha, 10)
            }
        })

        return atulizado;
    }   
}
export { TrocaDeInformacoesDoAdmService }