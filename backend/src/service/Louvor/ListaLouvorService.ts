import prisma from "../../prisma"

class ListaLouvorService{
    async execute(){
        const lista = await prisma.louvor.findMany({
            select: {
                id: true,
                nome: true,
                tom: true
            }
        })
        return lista;
    }
}

export { ListaLouvorService }