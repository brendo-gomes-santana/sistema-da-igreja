import prisma from "../../prisma";

class RemoveMusicoService{
    async execute(id_musico: string){
        
        if(!id_musico){
            throw new Error("Ifnorme o id do musico")
        }

        const remove = await prisma.musico.delete({
            where: { id: id_musico }
        })

        return remove;
    }
}

export { RemoveMusicoService }