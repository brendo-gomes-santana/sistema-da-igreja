import prisma from "../../prisma"

export interface AtualizarLouvorProps{
    id: string,
    nome?: string,
    link?:string,
    tom?: string,
    letra?: string
}

class atualizarLouvorService{
    async execute({
        id, letra, link, nome, tom
    }: AtualizarLouvorProps){
        if(!id){
            throw new Error('Informe o id do louvor para fazer alteração')
        }
        if(!await prisma.louvor.findFirst({where: { id }})){
            throw new Error(`não exixte louvor com esse id: ${id}`)
        }

        const alterando = await prisma.louvor.update({
            where: { id },
            data: {
                nome: nome === ' ' ? undefined : nome,
                link: link === ' ' ? undefined : link,
                tom: tom === ' ' ? undefined : tom,
                letra: letra === ' ' ? undefined : letra
            }
        })

        return alterando;
    }
}

export { atualizarLouvorService }