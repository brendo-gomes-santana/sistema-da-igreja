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
exports.ConfirmacarBandaController = void 0;
const ConfirmarBandaService_1 = require("../../service/Banda/ConfirmarBandaService");
class ConfirmacarBandaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_agendamento = req.query.id_agendamento;
            const confirmacao = req.body.confirmacao;
            const inicializacao = new ConfirmarBandaService_1.ConfirmarBandaService();
            const atualizando = yield inicializacao.execute(id_agendamento, confirmacao);
            return res.status(200).send(atualizando);
        });
    }
}
exports.ConfirmacarBandaController = ConfirmacarBandaController;
