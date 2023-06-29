import { Router } from "express";

import { apiKey } from './middlewares/keyApi';

import { CreateAdmController } from "./controllers/Adm/CreateAdmController";
import { SessionAdmController } from "./controllers/Adm/SessionAdmController";
const rota = Router()


rota.use(apiKey)
rota.post('/create/adm', new CreateAdmController().create)
rota.post('/session/adm', new SessionAdmController().handle)

export { rota }
