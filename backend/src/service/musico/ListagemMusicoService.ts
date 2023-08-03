import prisma from "../../prisma";

class ListagemMusicoService{
    async execute( nome?:string ){

        const lista = await prisma.musico.findMany({
            where: {
                nome: {
                    startsWith: nome
                }
            }
        })

        return lista;
    }
}

export { ListagemMusicoService }