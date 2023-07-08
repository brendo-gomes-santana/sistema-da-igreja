import prisma from "../../prisma";


class RemoveAgendamentoService{
    async execute(id: string){
        if(!id){
            throw new Error('Informe id')
        }

        const existeBanda = await prisma.banda.findMany({
            where: { id_agendamento: id }
        })
        if(existeBanda){
            await prisma.banda.deleteMany({
                where: { id_agendamento: id }
            })
        }

        const existeAgendamento = await prisma.agendamento.findFirst({
            where: { id }
        })

        if(existeAgendamento){
            const removido = await prisma.agendamento.delete({
                where: { id }
            })

            return removido;
        }else{
            throw new Error('Agendamento não existe')
        }
         
    }
}

export { RemoveAgendamentoService }