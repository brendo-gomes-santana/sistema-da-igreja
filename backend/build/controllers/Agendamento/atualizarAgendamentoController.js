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
exports.atualizarAgendamentoController = void 0;
const AtualizarAgendamentoService_1 = require("../../service/Agendamento/AtualizarAgendamentoService");
class atualizarAgendamentoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, dia, horario_para_cheagar, descricao, confirmacao } = req.body;
            const inicializacao = new AtualizarAgendamentoService_1.atualizarAgendamentoService();
            const atualizado = yield inicializacao.execute({
                id,
                dia,
                horario_para_cheagar,
                descricao,
                confirmacao
            });
            return res.json(atualizado);
        });
    }
}
exports.atualizarAgendamentoController = atualizarAgendamentoController;
