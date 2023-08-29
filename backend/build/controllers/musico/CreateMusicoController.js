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
exports.CreateMusicoController = void 0;
const CreateMusicoService_1 = require("../../service/musico/CreateMusicoService");
class CreateMusicoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, tipo } = req.body;
            const inicializacao = new CreateMusicoService_1.CreateMusicoService();
            const criadoMusico = yield inicializacao.execute({
                nome,
                email,
                tipo
            });
            return res.json(criadoMusico);
        });
    }
}
exports.CreateMusicoController = CreateMusicoController;
