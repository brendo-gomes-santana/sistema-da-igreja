import prisma from '../../prisma';
import { hash } from 'bcryptjs';

class TrocaDeInformacoesMusicoService{
    async execute(id_musico: string, email?: string, senha?: string, codigo?: string){

        if(!id_musico){
            throw new Error("informe id_musico")
        }

        const existeMusico = await prisma.musico.findFirst({
            where: { id: id_musico }
        })

        if(!existeMusico){
            throw new Error('musico não existe')
        }

        const trocado = await prisma.musico.update({
            where: { id: id_musico },
            data: {
                email,
                senha: senha && await hash(senha, 10),
                codigo: codigo === '' ? undefined : codigo
            }
        })

        return trocado;
    }
}

export { TrocaDeInformacoesMusicoService }