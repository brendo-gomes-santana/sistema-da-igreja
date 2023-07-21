import prisma from "../../prisma";

class detalheAgendamentoService{
    async execute(id:string){

        if(!id){
            throw new Error('Coloque o id do Agendamento')
        }

        const detalhe = await prisma.agendamento.findFirst({
            where: { id },
            select: {
                id:true,
                data: true,
                horario_para_chegar: true,
                descricao:true,
                status: true,
                bandas: {
                    select: {
                        id: true,
                        confirmacao: true,
                        musico: {
                            select: {
                                id:true,
                                nome:true
                            }
                        }
                    }
                },
                louvorATocar: {
                    select: {
                        id: true,
                        louvor: {
                            select: {
                                id:true,
                                nome:true,
                                tom: true
                            }
                        }
                    }
                }
            }
        })

        return detalhe;

    }
}

export { detalheAgendamentoService }