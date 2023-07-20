import prisma from "../../prisma";

class detalheLouvorService{
    async execute(id:string){
        if(!id){
            throw new Error('Informe o id do louvor')
        }

        if(!await prisma.louvor.findFirst({where: { id }})){
            throw new Error('Louvor não existe')
        }

        const detalhe = await prisma.louvor.findFirst({
            where: { id }
        })

        return detalhe;
    }
}

export { detalheLouvorService }