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
exports.RemoveAgendamentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RemoveAgendamentoService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Informe id');
            }
            //se existe banda, vai apagar
            if (yield prisma_1.default.banda.findMany({ where: { id_agendamento: id } })) {
                yield prisma_1.default.banda.deleteMany({
                    where: { id_agendamento: id }
                });
            }
            //se existe louvores vai apagar
            if (yield prisma_1.default.louvorATocar.findMany({ where: { id_agendamento: id } })) {
                yield prisma_1.default.louvorATocar.deleteMany({ where: { id_agendamento: id } });
            }
            if (yield prisma_1.default.agendamento.findFirst({ where: { id } })) {
                const removido = yield prisma_1.default.agendamento.delete({
                    where: { id }
                });
                return removido;
            }
            else {
                throw new Error('Agendamento não existe');
            }
        });
    }
}
exports.RemoveAgendamentoService = RemoveAgendamentoService;
