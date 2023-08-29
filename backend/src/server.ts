import dotenv from 'dotenv';
import http from 'http';

dotenv.config()

import app from './app';
const server = http.createServer(app);
server.listen(process.env.PORTA, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${process.env.PORTA}`)
})