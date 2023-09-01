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
exports.detalheAgendamentoController = void 0;
const detalheAgendamentoService_1 = require("../../service/Agendamento/detalheAgendamentoService");
class detalheAgendamentoController {
    detalhe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.id;
            const inicializacao = new detalheAgendamentoService_1.detalheAgendamentoService();
            const detalhe = yield inicializacao.execute(id);
            return res.status(200).send(detalhe);
        });
    }
}
exports.detalheAgendamentoController = detalheAgendamentoController;
