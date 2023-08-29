import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import 'express-async-errors';
import { routes } from './routers';

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).send({
            error: err.message
        })
    }

    return res.status(500).send({
        status: 'error',
        message: 'Internal server error'
    })
})

export default app;