import prisma from "../../prisma";


class RemoveAgendamentoService{
    async execute(id: string){
        if(!id){
            throw new Error('Informe id')
        }

        //se existe banda, vai apagar
        if(await prisma.banda.findMany({where: { id_agendamento: id }})){
            await prisma.banda.deleteMany({
                where: { id_agendamento: id }
            })
        }

        //se existe louvores vai apagar
        if(await prisma.louvorATocar.findMany({ where: { id_agendamento: id } })){
            await prisma.louvorATocar.deleteMany({where: { id_agendamento: id }})
        }

        if(await prisma.agendamento.findFirst({where: { id }})){
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