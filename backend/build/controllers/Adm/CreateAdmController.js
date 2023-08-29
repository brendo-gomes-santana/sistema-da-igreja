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
exports.CreateAdmController = void 0;
const CreateAdmService_1 = require("../../service/Adm/CreateAdmService");
class CreateAdmController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, codigo } = req.body;
            const inicializacao = new CreateAdmService_1.CreateAdmService();
            const criado = yield inicializacao.execute({
                nome,
                email,
                senha,
                codigo
            });
            return res.status(200).send(criado);
        });
    }
}
exports.CreateAdmController = CreateAdmController;
