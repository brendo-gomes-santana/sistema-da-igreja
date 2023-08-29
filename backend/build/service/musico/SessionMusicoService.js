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
exports.SessionMusicoService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = __importDefault(require("../../prisma"));
dotenv_1.default.config();
class SessionMusicoService {
    execute(email, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !senha) {
                throw new Error('Preencha os campos');
            }
            const musico = yield prisma_1.default.musico.findFirst({
                where: { email }
            });
            if (!musico) {
                throw new Error('Usuário não existe');
            }
            const senhaCerta = yield (0, bcryptjs_1.compare)(senha, musico.senha);
            if (!senhaCerta) {
                throw new Error('Senha incorrenta');
            }
            const token = (0, jsonwebtoken_1.sign)({
                nome: musico.nome,
                email: musico.email
            }, process.env.JWT, {
                subject: musico.id,
                expiresIn: '15d'
            });
            return {
                id: musico.id,
                nome: musico.nome,
                email: musico.email,
                tipo: musico.tipo,
                codigo: musico.codigo,
                token
            };
        });
    }
}
exports.SessionMusicoService = SessionMusicoService;
