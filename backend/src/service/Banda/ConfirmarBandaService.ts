import prisma from "../../prisma"
import { Expo } from 'expo-server-sdk';

class ConfirmarBandaService {
    async execute(id_agendamento: string, confirmacao: boolean) {
        if (!id_agendamento) {
            throw new Error('informe o id da agendar')
        }
        const banda = await prisma.banda.findMany({ 
            where: { id_agendamento },
            include: {
                musico: true,
            } 
        })

        if (!banda) {
            throw new Error("não exite musico cadastrado nesse evento")
        }
    
        const lista = await prisma.banda.updateMany({
            where: { id_agendamento },
            data: {
                confirmacao
            }
        })
        
        if (confirmacao) {
            // Crie uma instância do cliente Expo SDK
            let expo = new Expo();

            // Crie as mensagens que você deseja enviar para os clientes
            let mensagem = banda?.map( b => ({
                to: b?.musico?.codigo  === null ? ' ' : b?.musico?.codigo,
                body: 'Você possui um agendamento'
            }));

            // Envie as mensagens de notificação
            (async () => {
                try {
                    let chunks = expo.chunkPushNotifications(mensagem);
                    for (let chunk of chunks) {
                        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                        console.log('Tickets:', ticketChunk);
                    }
                } catch (error) {
                    console.error('Erro:', error);
                }
            })();

        }
    
        return lista;
    }
}

export { ConfirmarBandaService }