import prisma from "../../prisma";

class RemoveLouvorATocarService {
    async execute(id: string) {
        if (!id) {
            throw new Error('informe o id')
        }

        if (!await prisma.louvorATocar.findFirst({ where: { id } })) {
            throw new Error('não existe nem uma cadastrada com esse id')
        }

        const removido = await prisma.louvorATocar.delete({
            where: { id },
            select: {
                id: true,
                louvor: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        })

        return removido
    }
}

export { RemoveLouvorATocarService }