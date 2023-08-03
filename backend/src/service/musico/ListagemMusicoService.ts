import prisma from "../../prisma";

class ListagemMusicoService{
    async execute( nome?:string, tipo?: string ){

        const lista = await prisma.musico.findMany({
            where: {
                nome: {
                    startsWith: nome
                },
                tipo: tipo === ''? undefined : tipo 
            }
        })

        return lista;
    }
}

export { ListagemMusicoService }