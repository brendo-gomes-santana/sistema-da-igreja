"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKey = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function apiKey(req, res, next) {
    const api_key = req.query.api_key;
    if (!api_key) {
        return res.status(401).json({
            error: 'informe api_key'
        });
    }
    if (api_key !== process.env.API_KEY) {
        return res.status(401).json({
            error: 'Api_key incorreta'
        });
    }
    next();
}
exports.apiKey = apiKey;
