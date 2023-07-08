import prisma from "../../prisma";

export interface atualizarAgendamentoProps{
    id: string
    data?: string,
    horario_para_cheagar?: string,
    descricao?: string,
    confirmacao?: boolean,
}

class atualizarAgendamentoService{
    async execute({id,data, horario_para_cheagar, descricao, confirmacao}: atualizarAgendamentoProps){
        const existe = await prisma.agendamento.findFirst({
            where: { id }
        })
        if(!existe){
            throw new Error('Não existe esse agendamento')
        }

        const atualizando = await prisma.agendamento.update({
            where: { id },
            data: {
                data: data !== '' ? data : undefined,
                horario_para_chegar: horario_para_cheagar !== '' ? horario_para_cheagar : undefined,
                descricao: descricao !== '' ? descricao : undefined,
                confirmacao
            }
        })

        return atualizando;
    }
}

export { atualizarAgendamentoService }