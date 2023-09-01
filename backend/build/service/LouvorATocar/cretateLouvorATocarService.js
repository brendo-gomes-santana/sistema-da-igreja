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
exports.cretateLouvorATocarService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class cretateLouvorATocarService {
    execute({ id_agendamento, id_louvor }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_agendamento || !id_louvor) {
                throw new Error('preenchar os campos');
            }
            //verificando se agendamento existe
            if (!(yield prisma_1.default.agendamento.findFirst({ where: { id: id_agendamento } }))) {
                throw new Error('agendamento não existe');
            }
            //verificando se louvor existe
            if (!(yield prisma_1.default.louvor.findFirst({ where: { id: id_louvor } }))) {
                throw new Error('Louvor não existe');
            }
            const criado = yield prisma_1.default.louvorATocar.create({
                data: {
                    id_agendamento,
                    id_louvor
                },
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
            return criado;
        });
    }
}
exports.cretateLouvorATocarService = cretateLouvorATocarService;
