import express from 'express';
import cors from 'cors'

import { rota } from './routers';

const app = express()

app.use(express.json())
app.use(cors())

app.use(rota)

app.listen(3333, () => {
    console.log('SISTEMA FUNCIONANDO')
})