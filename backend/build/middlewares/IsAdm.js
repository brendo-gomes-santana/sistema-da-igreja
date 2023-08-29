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
exports.IsAdm = void 0;
const prisma_1 = __importDefault(require("../prisma"));
function IsAdm(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id_adm = req.query.id_adm;
        if (!id_adm) {
            return res.status(401).json({
                error: 'VocÇe não informou o id_adm'
            });
        }
        const isAdm = yield prisma_1.default.adm.findFirst({
            where: { id: id_adm }
        });
        if (!isAdm) {
            return res.status(401).json({
                error: 'Você não faz parte da equipe de adm'
            });
        }
        next();
    });
}
exports.IsAdm = IsAdm;
