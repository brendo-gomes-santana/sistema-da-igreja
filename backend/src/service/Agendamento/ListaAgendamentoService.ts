import prisma from "../../prisma";

class ListaAgendamentoService{
    async execute(){

        const lista = await prisma.agendamento.findMany({
            include: {
                bandas: {
                    include: {
                        musico: true
                    }
                }
            }
        })

        return lista;

    }
}
export { ListaAgendamentoService }