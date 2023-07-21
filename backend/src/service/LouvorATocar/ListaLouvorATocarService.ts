import prisma from "../../prisma"

class ListaLouvorATocarService{
    async execute(id_agendamento:string){
        if(!id_agendamento){
            throw new Error('Informe o id do agendamento')
        }

        if(!await prisma.louvorATocar.findMany({where: { id_agendamento }})){
            throw new Error(`não existe nem uma musica cadastra com esse id ${id_agendamento}`)
        }

        const lista = await prisma.louvorATocar.findMany({
            where: { id_agendamento },
            select: {
                id:true,
                louvor: {
                   select: {
                    id: true,
                    nome:true
                   }
                }
            }
        })

        return lista

    }
}

export { ListaLouvorATocarService }