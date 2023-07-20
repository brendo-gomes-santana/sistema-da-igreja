import prisma from "../../prisma";

class detalheAgendamentoService{
    async execute(id:string){

        if(!id){
            throw new Error('Coloque o id do Agendamento')
        }

        const detalhe = await prisma.agendamento.findFirst({
            where: { id },
            include: {
                bandas: {
                    include:{
                        musico: {
                            select: {
                                id:true,
                                nome: true
                            }
                        }
                    }
                },
                louvorATocar: {
                    include: {
                        louvor: {
                            select: {
                                id:true,
                                nome: true
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