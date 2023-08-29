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
exports.ListagemMusicoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListagemMusicoService {
    execute(nome, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield prisma_1.default.musico.findMany({
                where: {
                    nome: {
                        startsWith: nome
                    },
                    tipo: tipo === '' ? undefined : tipo
                }
            });
            return lista;
        });
    }
}
exports.ListagemMusicoService = ListagemMusicoService;
