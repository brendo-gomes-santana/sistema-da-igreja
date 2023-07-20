import prisma from "../../prisma";

class RemoveBandaService{
    async execute(id:string){

        if(!id){
            throw new Error('Informe o id da banda')
        }

        const removido = await prisma.banda.delete({
            where: {
                id
            },
            include: {
                musico:true
            }
        })

        return removido;
    }   
}

export { RemoveBandaService }