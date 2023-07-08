import prisma from '../../prisma';

export interface CreateAgendamentoProps {
    data: string,
    horario_para_chegar: string,
    descricao?: string
}

class CreateAgendamentoService{
    async execute({data, horario_para_chegar, descricao}:CreateAgendamentoProps){
        
        if(!data || !horario_para_chegar){
            throw new Error('Coloque a data e o horário')
        }

        const criado = await prisma.agendamento.create({
            data: {
                data,
                horario_para_chegar,
                descricao
            }
        })

        return criado;
    }
}

export { CreateAgendamentoService }