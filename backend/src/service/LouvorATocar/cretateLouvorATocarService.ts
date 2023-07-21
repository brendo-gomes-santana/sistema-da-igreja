import prisma from '../../prisma';

interface CreateLouvorATocarProps {
    id_agendamento: string,
    id_louvor: string
}
class cretateLouvorATocarService {
    async execute({ id_agendamento, id_louvor }: CreateLouvorATocarProps) {
        if (!id_agendamento || !id_louvor) {
            throw new Error('preenchar os campos')
        }

        //verificando se agendamento existe
        if (!await prisma.agendamento.findFirst({ where: { id: id_agendamento } })) {
            throw new Error('agendamento não existe')
        }

        //verificando se louvor existe
        if (!await prisma.louvor.findFirst({ where: { id: id_louvor } })) {
            throw new Error('Louvor não existe')
        }

        const criado = await prisma.louvorATocar.create({
            data: {
                id_agendamento,
                id_louvor
            },
            select: {
                louvor: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        })
    }
}

export { cretateLouvorATocarService }