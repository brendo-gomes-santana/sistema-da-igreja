import prisma from "../../prisma"

class VerAgendarDoMusicoService {
    async execute(id: string) {
        if (!id) {
            throw new Error('Informe o id do musico')
        }

        if (!await prisma.musico.findFirst({ where: { id } })) {
            throw new Error('Não existe músico com esse id')
        }

        const lista = await prisma.banda.findMany({
            where: { id_musico: id, confirmacao: true },
            include: {
                agendamento: {
                    select: {
                        data: true,
                        horario_para_chegar: true,
                        descricao: true,
                        status: true,
                        louvorATocar: {
                            select: {
                                louvor: {
                                    select: {
                                        id: true,
                                        nome: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        return lista;
    }
}

export { VerAgendarDoMusicoService }