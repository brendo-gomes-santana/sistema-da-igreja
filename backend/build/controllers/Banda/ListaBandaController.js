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
exports.ListaBandaController = void 0;
const ListaBandaService_1 = require("../../service/Banda/ListaBandaService");
class ListaBandaController {
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_agendamento = req.query.id_agendamento;
            const inicializacao = new ListaBandaService_1.ListaBandaService();
            const lista = yield inicializacao.execute(id_agendamento);
            return res.json(lista);
        });
    }
}
exports.ListaBandaController = ListaBandaController;
