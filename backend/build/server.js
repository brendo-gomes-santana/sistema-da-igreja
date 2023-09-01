"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
const PORT = process.env.PORT || 3003;
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${PORT}`);
});
