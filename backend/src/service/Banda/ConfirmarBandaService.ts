import prisma from "../../prisma"

class ConfirmarBandaService{
    async execute(id_agendamento:string, confirmacao:boolean){
        if(!id_agendamento){
            throw new Error('informe o id da agendar')
        }

        if(!await prisma.banda.findMany({where: { id_agendamento }})){
            throw new Error("não exite musico cadastrado nesse evento")
        }

        const lista = await prisma.banda.updateMany({
            where: { id_agendamento },
            data: {
                confirmacao
            }
        })


        return lista;
    }
}

export { ConfirmarBandaService }