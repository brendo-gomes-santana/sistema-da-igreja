import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import 'express-async-errors';
import dotenv from 'dotenv';
import { rota } from './routers';
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use(rota)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(process.env.PORTA, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${process.env.PORTA}`)
})