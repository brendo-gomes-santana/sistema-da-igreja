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
exports.VerAgendarDoMusicoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class VerAgendarDoMusicoService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Informe o id do musico');
            }
            if (!(yield prisma_1.default.musico.findFirst({ where: { id } }))) {
                throw new Error('Não existe músico com esse id');
            }
            const lista = yield prisma_1.default.banda.findMany({
                where: { id_musico: id, confirmacao: true },
                include: {
                    agendamento: {
                        select: {
                            data: true,
                            horario_para_chegar: true,
                            descricao: true,
                            status: true,
                            louvorATocar: {
                                select: {
                                    louvor: {
                                        select: {
                                            id: true,
                                            nome: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            return lista;
        });
    }
}
exports.VerAgendarDoMusicoService = VerAgendarDoMusicoService;
