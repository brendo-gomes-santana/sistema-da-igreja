import prisma from "../../prisma";

class ListagemMusicoService{
    async execute(){

        const lista = await prisma.musico.findMany()

        return lista;
    }
}

export { ListagemMusicoService }