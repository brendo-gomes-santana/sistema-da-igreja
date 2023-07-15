import prisma from "../../prisma";

class CreateBandaService{
    async execute(id_musico: string, id_agendamento: string){
        if(!id_musico || !id_agendamento){
            throw new Error('Selecione o musico ou agendamento')
        }

        if(! await prisma.musico.findFirst({where: { id: id_musico }})){
            throw new Error('musico não existe')
        }
        if(! await prisma.agendamento.findFirst({where: { id: id_agendamento }})){
            throw new Error('Agendamento não existe')
        }
 
        const criado = await prisma.banda.create({
            data: {
                id_musico,
                id_agendamento
            },
            include: {
                musico: true
            }
        })

        return criado;

    }
}

export { CreateBandaService }