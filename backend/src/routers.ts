import { Router } from "express";

//MIDDLEWARES
import { apiKey } from './middlewares/keyApi';
import { Jwt } from "./middlewares/Auth";
import { IsAdm } from "./middlewares/IsAdm";

//ROTAS
import { CreateAdmController } from "./controllers/Adm/CreateAdmController";
import { SessionAdmController } from "./controllers/Adm/SessionAdmController";
import { TrocaInformacoesAdmController } from './controllers/Adm/TrocaInformacoesAdmController';
import { InformacoesAdmController } from "./controllers/Adm/InformacoesAdmController";
import { CreateMusicoController } from "./controllers/musico/CreateMusicoController";
import { TrocaDeInformacoesMusicoController } from "./controllers/musico/TrocaDeInformacoesMusicoController";
import { SessionMusicoController } from "./controllers/musico/SessionMusicoController";
import { RemoveMusicoController } from "./controllers/musico/RemoveMusicoController";
import { ListagemMusicoController } from "./controllers/musico/ListagemMusicoController";
import { CreateAgendamentoController } from "./controllers/Agendamento/CreateAgendamentoController";
import { RemoveAgendamentoController } from "./controllers/Agendamento/RemoveAgendamentoController";
import { ListaAgendamentoController } from "./controllers/Agendamento/ListaAgendamentoController";
import { atualizarAgendamentoController } from "./controllers/Agendamento/atualizarAgendamentoController";

const rota = Router()

rota.use(apiKey)
rota.post('/create/adm', new CreateAdmController().create)
rota.post('/session/adm', new SessionAdmController().handle)
rota.post('/session/musico', new SessionMusicoController().handle)

rota.use(Jwt)
rota.patch('/update/adm', new TrocaInformacoesAdmController().atualizar)
rota.get('/infor/adm', new InformacoesAdmController().handle)

//ROTAS MUSICO
rota.post('/create/musico', IsAdm, new CreateMusicoController().create)
rota.patch('/update/musico', new TrocaDeInformacoesMusicoController().update)
rota.delete('/remove/musico', IsAdm, new RemoveMusicoController().handle)
rota.get('/lista/musico', IsAdm, new ListagemMusicoController().show)

// ROTAS DE AGENDAMENTOS
rota.post('/create/agendamento', IsAdm, new CreateAgendamentoController().create)
rota.delete('/remove/agendamento/:id', IsAdm, new RemoveAgendamentoController().remove)
rota.get('/lista/agendamento', new ListaAgendamentoController().show)
rota.patch('/atualizando/agendamento', IsAdm, new atualizarAgendamentoController().handle)

export { rota }
