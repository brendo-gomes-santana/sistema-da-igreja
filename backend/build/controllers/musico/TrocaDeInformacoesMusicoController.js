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
exports.TrocaDeInformacoesMusicoController = void 0;
const TrocaDeInformacoesMusicoService_1 = require("../../service/musico/TrocaDeInformacoesMusicoService");
class TrocaDeInformacoesMusicoController {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_musico = req.query.id_musico;
            const { email, senha, codigo } = req.body;
            const inicializacao = new TrocaDeInformacoesMusicoService_1.TrocaDeInformacoesMusicoService();
            const atualizando = yield inicializacao.execute(id_musico, email, senha, codigo);
            return res.json(atualizando);
        });
    }
}
exports.TrocaDeInformacoesMusicoController = TrocaDeInformacoesMusicoController;
