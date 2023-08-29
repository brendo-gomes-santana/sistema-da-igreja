"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
function Jwt(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            error: 'Informe seu token'
        });
    }
    next();
}
exports.Jwt = Jwt;
