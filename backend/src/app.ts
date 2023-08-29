import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import 'express-async-errors';
import { rota } from './routers';
import morgan from 'morgan';

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"));
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

export default app;