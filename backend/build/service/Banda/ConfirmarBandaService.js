"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmarBandaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const expo_server_sdk_1 = require("expo-server-sdk");
const date_fns_1 = require("date-fns");
class ConfirmarBandaService {
    execute(id_agendamento, confirmacao) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_agendamento) {
                throw new Error('informe o id da agendar');
            }
            const banda = yield prisma_1.default.banda.findMany({
                where: { id_agendamento },
                include: {
                    musico: true,
                    agendamento: true,
                }
            });
            if (!banda) {
                throw new Error("não exite musico cadastrado nesse evento");
            }
            const lista = yield prisma_1.default.banda.updateMany({
                where: { id_agendamento },
                data: {
                    confirmacao
                }
            });
            if (confirmacao) {
                // Crie uma instância do cliente Expo SDK
                let expo = new expo_server_sdk_1.Expo();
                // Crie as mensagens que você deseja enviar para os clientes
                let mensagem = banda === null || banda === void 0 ? void 0 : banda.map(b => {
                    var _a, _b;
                    return ({
                        to: ((_a = b === null || b === void 0 ? void 0 : b.musico) === null || _a === void 0 ? void 0 : _a.codigo) === null ? ' ' : (_b = b === null || b === void 0 ? void 0 : b.musico) === null || _b === void 0 ? void 0 : _b.codigo,
                        title: `Você possui um agendamento`,
                        body: `Agendamento para o dia ${(0, date_fns_1.format)(new Date(b.agendamento.data), 'dd/MM/yyyy')} às ${b.agendamento.horario_para_chegar}h.`
                    });
                });
                // Envie as mensagens de notificação
                (() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        let chunks = expo.chunkPushNotifications(mensagem);
                        for (let chunk of chunks) {
                            let ticketChunk = yield expo.sendPushNotificationsAsync(chunk);
                            console.log('Tickets:', ticketChunk);
                        }
                    }
                    catch (error) {
                        console.error('Erro:', error);
                    }
                }))();
            }
            return lista;
        });
    }
}
exports.ConfirmarBandaService = ConfirmarBandaService;
