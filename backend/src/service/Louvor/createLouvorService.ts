import prisma from '../../prisma';

export interface CreateLouvorProps {
    nome: string,
    link?: string,
    tom?: string,
    letra?: string
}
class createLouvorService{
    async execute({
        nome,
        link,
        tom,
        letra
    }: CreateLouvorProps){

        if(!nome){
            throw new Error('informe o nome do louvor')
        }

        const criadoLouvo = await prisma.louvor.create({
            data: {
                nome,
                link,
                tom,
                letra
            },
            select: {
                id:true,
                nome:true,
                tom:true
            }
        })

        return criadoLouvo;


    }
}

export { createLouvorService }