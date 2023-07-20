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
import { CreateBandaController } from "./controllers/Banda/createBandaController";
import { ListaBandaController } from "./controllers/Banda/ListaBandaController";
import { RemoveBandaController } from "./controllers/Banda/RemovebandaController";
import { detalheAgendamentoController } from "./controllers/Agendamento/detalheAgendamentoController";
import { CreateLouvorController } from "./controllers/Louvor/CreateLouvorController";
import { RemoveLouvorController } from "./controllers/Louvor/RemoveLouvorController";
import { ListaLouvorController } from "./controllers/Louvor/ListaLouvorController";
import { DetalheLouvorController } from "./controllers/Louvor/DetalheLouvorController";
import { atualizandoLouvorController } from "./controllers/Louvor/atualizandoLouvorController";

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
rota.get('/lista/agendamento', IsAdm, new ListaAgendamentoController().show)
rota.get('/detalhe/agendamento', new detalheAgendamentoController().detalhe)
rota.patch('/atualizando/agendamento', IsAdm, new atualizarAgendamentoController().handle)

// ROTAS DE BANDA 
rota.post('/create/banda', IsAdm, new CreateBandaController().create)
rota.get('/lista/banda', IsAdm, new ListaBandaController().show)
rota.delete('/remove/banda', IsAdm, new RemoveBandaController().remove)

//ROTAS LOUVORES
rota.post('/create/louvor', IsAdm, new CreateLouvorController().create)
rota.delete('/remove/louvor', IsAdm, new RemoveLouvorController().remove)
rota.get('/lista/louvor', IsAdm, new ListaLouvorController().show)
rota.get('/detalhe/louvor', new DetalheLouvorController().handle)
rota.patch('/atualizando/louvor', new atualizandoLouvorController().handle)

export { rota }
