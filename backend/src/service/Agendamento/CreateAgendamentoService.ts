import prisma from '../../prisma';

export interface CreateAgendamentoProps {
    data: string,
    horario_para_chegar: string,
    status: string,
    descricao?: string
}

class CreateAgendamentoService{
    async execute({data, horario_para_chegar, descricao, status}:CreateAgendamentoProps){
        
        if(!data || !horario_para_chegar || !status){
            throw new Error('Coloque a data e o horário')
        }

        const criado = await prisma.agendamento.create({
            data: {
                data,
                horario_para_chegar,
                status,
                descricao,
            }
        })

        return criado;
    }
}

export { CreateAgendamentoService }