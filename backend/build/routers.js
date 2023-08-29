"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
//MIDDLEWARES
const keyApi_1 = require("./middlewares/keyApi");
const Auth_1 = require("./middlewares/Auth");
const IsAdm_1 = require("./middlewares/IsAdm");
//ROTAS
const CreateAdmController_1 = require("./controllers/Adm/CreateAdmController");
const SessionAdmController_1 = require("./controllers/Adm/SessionAdmController");
const TrocaInformacoesAdmController_1 = require("./controllers/Adm/TrocaInformacoesAdmController");
const InformacoesAdmController_1 = require("./controllers/Adm/InformacoesAdmController");
const CreateMusicoController_1 = require("./controllers/musico/CreateMusicoController");
const TrocaDeInformacoesMusicoController_1 = require("./controllers/musico/TrocaDeInformacoesMusicoController");
const SessionMusicoController_1 = require("./controllers/musico/SessionMusicoController");
const RemoveMusicoController_1 = require("./controllers/musico/RemoveMusicoController");
const ListagemMusicoController_1 = require("./controllers/musico/ListagemMusicoController");
const CreateAgendamentoController_1 = require("./controllers/Agendamento/CreateAgendamentoController");
const RemoveAgendamentoController_1 = require("./controllers/Agendamento/RemoveAgendamentoController");
const ListaAgendamentoController_1 = require("./controllers/Agendamento/ListaAgendamentoController");
const atualizarAgendamentoController_1 = require("./controllers/Agendamento/atualizarAgendamentoController");
const createBandaController_1 = require("./controllers/Banda/createBandaController");
const ListaBandaController_1 = require("./controllers/Banda/ListaBandaController");
const RemovebandaController_1 = require("./controllers/Banda/RemovebandaController");
const detalheAgendamentoController_1 = require("./controllers/Agendamento/detalheAgendamentoController");
const CreateLouvorController_1 = require("./controllers/Louvor/CreateLouvorController");
const RemoveLouvorController_1 = require("./controllers/Louvor/RemoveLouvorController");
const ListaLouvorController_1 = require("./controllers/Louvor/ListaLouvorController");
const DetalheLouvorController_1 = require("./controllers/Louvor/DetalheLouvorController");
const atualizandoLouvorController_1 = require("./controllers/Louvor/atualizandoLouvorController");
const createLouvorATocarController_1 = require("./controllers/LouvorATocar/createLouvorATocarController");
const ListaLouvorATocarController_1 = require("./controllers/LouvorATocar/ListaLouvorATocarController");
const RemoveLouvorATocarController_1 = require("./controllers/LouvorATocar/RemoveLouvorATocarController");
const VerAgendarDoMusicoController_1 = require("./controllers/musico/VerAgendarDoMusicoController");
const ConfirmacarBandaController_1 = require("./controllers/Banda/ConfirmacarBandaController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use(keyApi_1.apiKey);
routes.post('/create/adm', new CreateAdmController_1.CreateAdmController().create);
routes.post('/session/adm', new SessionAdmController_1.SessionAdmController().handle);
routes.post('/session/musico', new SessionMusicoController_1.SessionMusicoController().handle);
routes.use(Auth_1.Jwt);
routes.patch('/update/adm', new TrocaInformacoesAdmController_1.TrocaInformacoesAdmController().atualizar);
routes.get('/infor/adm', new InformacoesAdmController_1.InformacoesAdmController().handle);
//routesS MUSICO
routes.post('/create/musico', IsAdm_1.IsAdm, new CreateMusicoController_1.CreateMusicoController().create);
routes.patch('/update/musico', new TrocaDeInformacoesMusicoController_1.TrocaDeInformacoesMusicoController().update);
routes.delete('/remove/musico', IsAdm_1.IsAdm, new RemoveMusicoController_1.RemoveMusicoController().handle);
routes.post('/lista/musico', IsAdm_1.IsAdm, new ListagemMusicoController_1.ListagemMusicoController().show);
routes.get('/agendar/musico', new VerAgendarDoMusicoController_1.VerAgendarDoMusicoController().handle);
// routesS DE AGENDAMENTOS
routes.post('/create/agendamento', IsAdm_1.IsAdm, new CreateAgendamentoController_1.CreateAgendamentoController().create);
routes.delete('/remove/agendamento', IsAdm_1.IsAdm, new RemoveAgendamentoController_1.RemoveAgendamentoController().remove);
routes.get('/lista/agendamento', IsAdm_1.IsAdm, new ListaAgendamentoController_1.ListaAgendamentoController().show);
routes.get('/detalhe/agendamento', new detalheAgendamentoController_1.detalheAgendamentoController().detalhe);
routes.patch('/atualizando/agendamento', IsAdm_1.IsAdm, new atualizarAgendamentoController_1.atualizarAgendamentoController().handle);
// routesS DE BANDA 
routes.post('/create/banda', IsAdm_1.IsAdm, new createBandaController_1.CreateBandaController().create);
routes.get('/lista/banda', IsAdm_1.IsAdm, new ListaBandaController_1.ListaBandaController().show);
routes.delete('/remove/banda', IsAdm_1.IsAdm, new RemovebandaController_1.RemoveBandaController().remove);
routes.patch('/atualizando/banda', IsAdm_1.IsAdm, new ConfirmacarBandaController_1.ConfirmacarBandaController().handle);
//routesS LOUVORES
routes.post('/create/louvor', IsAdm_1.IsAdm, new CreateLouvorController_1.CreateLouvorController().create);
routes.delete('/remove/louvor', IsAdm_1.IsAdm, new RemoveLouvorController_1.RemoveLouvorController().remove);
routes.get('/lista/louvor', IsAdm_1.IsAdm, new ListaLouvorController_1.ListaLouvorController().show);
routes.get('/detalhe/louvor', new DetalheLouvorController_1.DetalheLouvorController().handle);
routes.patch('/atualizando/louvor', new atualizandoLouvorController_1.atualizandoLouvorController().handle);
//routesS LOUVORES A TOCAR
routes.post('/create/agendamento/louvor', IsAdm_1.IsAdm, new createLouvorATocarController_1.createLouvorATocarController().handle);
routes.get('/lista/agendamento/louvor', new ListaLouvorATocarController_1.ListaLouvorATocarController().handle);
routes.delete('/remove/agendamento/louvor', IsAdm_1.IsAdm, new RemoveLouvorATocarController_1.RemoveLouvorATocarController().delete);
