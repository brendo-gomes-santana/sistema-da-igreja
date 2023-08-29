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
import { createLouvorATocarController } from "./controllers/LouvorATocar/createLouvorATocarController";
import { ListaLouvorATocarController } from "./controllers/LouvorATocar/ListaLouvorATocarController";
import { RemoveLouvorATocarController } from "./controllers/LouvorATocar/RemoveLouvorATocarController";
import { VerAgendarDoMusicoController } from "./controllers/musico/VerAgendarDoMusicoController";
import { ConfirmacarBandaController } from "./controllers/Banda/ConfirmacarBandaController";

const routes = Router();

routes.use(apiKey)
routes.post('/create/adm', new CreateAdmController().create)
routes.post('/session/adm', new SessionAdmController().handle)
routes.post('/session/musico', new SessionMusicoController().handle)

routes.use(Jwt)
routes.patch('/update/adm', new TrocaInformacoesAdmController().atualizar)
routes.get('/infor/adm', new InformacoesAdmController().handle)

//routesS MUSICO
routes.post('/create/musico', IsAdm, new CreateMusicoController().create)
routes.patch('/update/musico', new TrocaDeInformacoesMusicoController().update)
routes.delete('/remove/musico', IsAdm, new RemoveMusicoController().handle)
routes.post('/lista/musico', IsAdm, new ListagemMusicoController().show)
routes.get('/agendar/musico', new VerAgendarDoMusicoController().handle)

// routesS DE AGENDAMENTOS
routes.post('/create/agendamento', IsAdm, new CreateAgendamentoController().create)
routes.delete('/remove/agendamento', IsAdm, new RemoveAgendamentoController().remove)
routes.get('/lista/agendamento', IsAdm, new ListaAgendamentoController().show)
routes.get('/detalhe/agendamento', new detalheAgendamentoController().detalhe)
routes.patch('/atualizando/agendamento', IsAdm, new atualizarAgendamentoController().handle)

// routesS DE BANDA 
routes.post('/create/banda', IsAdm, new CreateBandaController().create)
routes.get('/lista/banda', IsAdm, new ListaBandaController().show)
routes.delete('/remove/banda', IsAdm, new RemoveBandaController().remove)
routes.patch('/atualizando/banda', IsAdm, new ConfirmacarBandaController().handle)

//routesS LOUVORES
routes.post('/create/louvor', IsAdm, new CreateLouvorController().create)
routes.delete('/remove/louvor', IsAdm, new RemoveLouvorController().remove)
routes.get('/lista/louvor', IsAdm, new ListaLouvorController().show)
routes.get('/detalhe/louvor', new DetalheLouvorController().handle)
routes.patch('/atualizando/louvor', new atualizandoLouvorController().handle)


//routesS LOUVORES A TOCAR
routes.post('/create/agendamento/louvor', IsAdm, new createLouvorATocarController().handle)
routes.get('/lista/agendamento/louvor', new ListaLouvorATocarController().handle)
routes.delete('/remove/agendamento/louvor', IsAdm, new RemoveLouvorATocarController().delete)

export { routes }
