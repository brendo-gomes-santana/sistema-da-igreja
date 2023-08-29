"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const server = http_1.default.createServer(app_1.default);
server.listen(process.env.PORTA, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${process.env.PORTA}`);
});
