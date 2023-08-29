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
exports.CreateAdmService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class CreateAdmService {
    execute({ nome, email, senha, codigo }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!nome || !senha || !email || !codigo) {
                throw new Error('Preenchar todos os campo');
            }
            if (codigo !== process.env.CODIGO) {
                throw new Error('Codigo Incorreto');
            }
            const ExisteAdm = yield prisma_1.default.adm.findFirst({
                where: { email }
            });
            if (ExisteAdm) {
                throw new Error('E-mail já foi cadastrado');
            }
            const criado = yield prisma_1.default.adm.create({
                data: {
                    nome,
                    email,
                    senha: yield (0, bcryptjs_1.hash)(senha, 10)
                },
                select: {
                    id: true,
                    nome: true,
                    email: true
                }
            });
            return criado;
        });
    }
}
exports.CreateAdmService = CreateAdmService;
