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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLouvorATocarController = void 0;
const cretateLouvorATocarService_1 = require("../../service/LouvorATocar/cretateLouvorATocarService");
class createLouvorATocarController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_agendamento = req.query.id_agendamento;
            const id_louvor = req.query.id_louvor;
            const inicializacao = new cretateLouvorATocarService_1.cretateLouvorATocarService();
            const criado = yield inicializacao.execute({ id_agendamento, id_louvor });
            return res.json(criado);
        });
    }
}
exports.createLouvorATocarController = createLouvorATocarController;
