"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routers_1 = require("./routers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routers_1.routes);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).send({
            error: err.message
        });
    }
    return res.status(500).send({
        status: 'error',
        message: 'Internal server error'
    });
});
exports.default = app;
