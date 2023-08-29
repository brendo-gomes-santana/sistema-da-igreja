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
exports.atualizarAgendamentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class atualizarAgendamentoService {
    execute({ id, dia, horario_para_cheagar, descricao, confirmacao, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield prisma_1.default.agendamento.findFirst({ where: { id } }))) {
                throw new Error("Não existe esse agendamento");
            }
            const atualizando = yield prisma_1.default.agendamento.update({
                where: { id: id },
                data: {
                    data: dia !== "" ? dia : undefined,
                    horario_para_chegar: horario_para_cheagar !== "" ? horario_para_cheagar : undefined,
                    descricao: descricao !== "" ? descricao : undefined,
                    confirmacao,
                },
            });
            return atualizando;
        });
    }
}
exports.atualizarAgendamentoService = atualizarAgendamentoService;
