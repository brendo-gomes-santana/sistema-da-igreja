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
const date_fns_1 = require("date-fns");
const fcm_node_1 = __importDefault(require("fcm-node"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
                const Api_Key = process.env.CHAVE;
                const fcm = new fcm_node_1.default(Api_Key);
                banda === null || banda === void 0 ? void 0 : banda.forEach((b) => {
                    var _a, _b;
                    const message = {
                        to: ((_a = b === null || b === void 0 ? void 0 : b.musico) === null || _a === void 0 ? void 0 : _a.codigo) === null ? ' ' : (_b = b === null || b === void 0 ? void 0 : b.musico) === null || _b === void 0 ? void 0 : _b.codigo,
                        notification: {
                            title: `Você possui um agendamento`,
                            body: `Agendamento para o dia ${(0, date_fns_1.format)(new Date(b.agendamento.data), 'dd/MM/yyyy')} às ${b.agendamento.horario_para_chegar}h.`
                        },
                    };
                    fcm.send(message, function (err, response) {
                        if (err) {
                            console.log("Algo Deu errado");
                        }
                        else {
                            console.log("Mensagem Enviada", response);
                        }
                    });
                });
            }
            return lista;
        });
    }
}
exports.ConfirmarBandaService = ConfirmarBandaService;
