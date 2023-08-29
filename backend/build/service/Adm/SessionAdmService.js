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
exports.SessionAdmService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bcryptjs_1 = require("bcryptjs");
class SessionAdmService {
    execute(email, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !senha) {
                throw new Error('Preenchar os campos');
            }
            const adm = yield prisma_1.default.adm.findFirst({
                where: { email }
            });
            if (!adm) {
                throw new Error('Adm não existe');
            }
            const senhaCorreta = yield (0, bcryptjs_1.compare)(senha, adm.senha);
            if (!senhaCorreta) {
                throw new Error('Senha incorreta');
            }
            const token = (0, jsonwebtoken_1.sign)({
                nome: adm.nome,
                email: adm.email
            }, process.env.JWT, {
                subject: adm.id,
                expiresIn: '15d'
            });
            return {
                id: adm.id,
                nome: adm.nome,
                email: adm.email,
                token
            };
        });
    }
}
exports.SessionAdmService = SessionAdmService;
