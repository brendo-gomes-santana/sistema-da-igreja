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
exports.atualizarLouvorService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class atualizarLouvorService {
    execute({ id, letra, link, nome, tom }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Informe o id do louvor para fazer alteração');
            }
            if (!(yield prisma_1.default.louvor.findFirst({ where: { id } }))) {
                throw new Error(`não exixte louvor com esse id: ${id}`);
            }
            const alterando = yield prisma_1.default.louvor.update({
                where: { id },
                data: {
                    nome: nome === ' ' ? undefined : nome,
                    link: link === ' ' ? undefined : link,
                    tom: tom === ' ' ? undefined : tom,
                    letra: letra === ' ' ? undefined : letra
                }
            });
            return alterando;
        });
    }
}
exports.atualizarLouvorService = atualizarLouvorService;
