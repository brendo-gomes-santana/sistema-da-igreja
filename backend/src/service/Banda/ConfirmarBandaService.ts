import prisma from "../../prisma"
import { format } from 'date-fns';
import FCM from 'fcm-node';

import dotenv from 'dotenv';
dotenv.config()

class ConfirmarBandaService {
    async execute(id_agendamento: string, confirmacao: boolean) {
        if (!id_agendamento) {
            throw new Error('informe o id da agendar')
        }
        const banda = await prisma.banda.findMany({
            where: { id_agendamento },
            include: {
                musico: true,
                agendamento: true,
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
            const Api_Key = process.env.CHAVE as string;
            const fcm = new FCM(Api_Key)

            banda?.forEach((b) => {
                const message = { 
                    to: b?.musico?.codigo === null ? ' ' : b?.musico?.codigo, 
                    
                    notification: {
                        title: `Você possui um agendamento`,
                        body: `Agendamento para o dia ${format(new Date(b.agendamento.data), 'dd/MM/yyyy')} às ${b.agendamento.horario_para_chegar}h.`
                    },
                };
                
                fcm.send(message, function(err: Error, response: any){
                    if (err) {
                        console.log("Algo Deu errado");
                    } else {
                        console.log("Mensagem Enviada", response);
                    }
                }); 
            })
        }

        return lista;
    }
}

export { ConfirmarBandaService }