import { Router } from "express";


import { CreateAdmController } from "./controllers/CreateAdmController";

const rota = Router()

rota.get('/testes', new CreateAdmController().create)

export { rota }
