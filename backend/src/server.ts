import { config } from 'dotenv';
import app from './app';
import http from 'http'
import yearsToMonths from 'date-fns/yearsToMonths';
if (process.env.NODE_ENV !== "production") {
    config();
  }

const PORT = process.env.PORT || 3003;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${PORT}`)
})
