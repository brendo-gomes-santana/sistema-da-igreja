import prisma from "../../prisma";


class InformacoesAdmService{
    async execute(id_adm: string){

        if(!id_adm){
            throw new Error('Informe o id_adm')
        }

        const atualizar = await prisma.adm.findFirst({
            where: { id: id_adm },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })

        return atualizar;
    }
}

export { InformacoesAdmService }