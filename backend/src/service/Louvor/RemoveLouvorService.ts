import prisma from "../../prisma";

class RemoveLouvorService {
    async execute(id:string){
        if(!id){
            throw new Error('Informe o id do louvor')
        }
    
        if(!await prisma.louvor.findFirst({where: { id }})){
            throw new Error('Louvor não existe')
        }

        const excluido = await prisma.louvor.delete({
            where: { id },
            select: {
                id: true,
                nome: true,
                tom: true
            }
        })

        return excluido;
    }
}

export { RemoveLouvorService }