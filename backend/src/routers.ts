import { Router } from "express";

import { apiKey } from './middlewares/keyApi';
import { Jwt } from "./middlewares/Auth";

import { CreateAdmController } from "./controllers/Adm/CreateAdmController";
import { SessionAdmController } from "./controllers/Adm/SessionAdmController";
import { TrocaInformacoesAdmController } from './controllers/Adm/TrocaInformacoesAdmController';
import { InformacoesAdmController } from "./controllers/Adm/InformacoesAdmController";

const rota = Router()


rota.use(apiKey)
rota.post('/create/adm', new CreateAdmController().create)
rota.post('/session/adm', new SessionAdmController().handle)

rota.use(Jwt)
rota.patch('/update/adm', new TrocaInformacoesAdmController().atualizar)
rota.get('/infor/adm', new InformacoesAdmController().handle)

export { rota }
