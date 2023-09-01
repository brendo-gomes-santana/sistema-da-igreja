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
exports.ListaLouvorATocarService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListaLouvorATocarService {
    execute(id_agendamento) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_agendamento) {
                throw new Error('Informe o id do agendamento');
            }
            if (!(yield prisma_1.default.louvorATocar.findMany({ where: { id_agendamento } }))) {
                throw new Error(`não existe nem uma musica cadastra com esse id ${id_agendamento}`);
            }
            const lista = yield prisma_1.default.louvorATocar.findMany({
                where: { id_agendamento },
                select: {
                    id: true,
                    louvor: {
                        select: {
                            id: true,
                            nome: true
                        }
                    }
                }
            });
            return lista;
        });
    }
}
exports.ListaLouvorATocarService = ListaLouvorATocarService;
