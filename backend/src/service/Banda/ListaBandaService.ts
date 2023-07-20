import prisma from "../../prisma";

class ListaBandaService{
    async execute(id_agendamento:string){
        if(!id_agendamento){
            throw new Error('Informe o id_agendamento')
        }

        const lista = await prisma.banda.findMany({
            where: { id_agendamento },
            include: {
                musico: true
            }
        })

        return lista;
    }
}

export { ListaBandaService }