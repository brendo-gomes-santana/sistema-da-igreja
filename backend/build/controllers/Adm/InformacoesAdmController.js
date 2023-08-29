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
exports.InformacoesAdmController = void 0;
const InformacoesAdmService_1 = require("../../service/Adm/InformacoesAdmService");
class InformacoesAdmController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_adm = req.query.id_adm;
            const inicializacao = new InformacoesAdmService_1.InformacoesAdmService();
            const dados = yield inicializacao.execute(id_adm);
            return res.json(dados);
        });
    }
}
exports.InformacoesAdmController = InformacoesAdmController;
