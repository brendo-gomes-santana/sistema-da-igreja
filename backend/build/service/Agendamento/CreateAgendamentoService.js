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
exports.CreateAgendamentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAgendamentoService {
    execute({ data, horario_para_chegar, descricao, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data || !horario_para_chegar || !status) {
                throw new Error('Coloque a data e o horário');
            }
            const criado = yield prisma_1.default.agendamento.create({
                data: {
                    data,
                    horario_para_chegar,
                    status,
                    descricao,
                }
            });
            return criado;
        });
    }
}
exports.CreateAgendamentoService = CreateAgendamentoService;
