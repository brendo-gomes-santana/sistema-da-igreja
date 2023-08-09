import prisma from "../../prisma";

export interface atualizarAgendamentoProps {
  id: string;
  dia?: string;
  horario_para_cheagar?: string;
  descricao?: string;
  confirmacao?: boolean;
}

class atualizarAgendamentoService {
  async execute({
    id,
    dia,
    horario_para_cheagar,
    descricao,
    confirmacao,
  }: atualizarAgendamentoProps) {
    if (
      !await prisma.agendamento.findFirst({ where: { id }})
    ) {
      throw new Error("Não existe esse agendamento");
    }

    const atualizando = await prisma.agendamento.update({
      where: { id: id },
      data: {
        data: dia !== "" ? dia : undefined,
        horario_para_chegar:
          horario_para_cheagar !== "" ? horario_para_cheagar : undefined,
        descricao: descricao !== "" ? descricao : undefined,
        confirmacao,
      },
    });

    return atualizando;
  }
}

export { atualizarAgendamentoService };
