import prisma from "../../prisma";

class ListaAgendamentoService{
    async execute(){

        const lista = await prisma.agendamento.findMany()

        return lista;

    }
}
export { ListaAgendamentoService }