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
exports.RemoveLouvorController = void 0;
const RemoveLouvorService_1 = require("../../service/Louvor/RemoveLouvorService");
class RemoveLouvorController {
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.id;
            const inicializado = new RemoveLouvorService_1.RemoveLouvorService();
            const removido = yield inicializado.execute(id);
            return res.json(removido);
        });
    }
}
exports.RemoveLouvorController = RemoveLouvorController;
