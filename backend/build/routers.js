"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rota = void 0;
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
const rota = (0, express_1.Router)();
exports.rota = rota;
rota.use(keyApi_1.apiKey);
rota.post('/create/adm', new CreateAdmController_1.CreateAdmController().create);
rota.post('/session/adm', new SessionAdmController_1.SessionAdmController().handle);
rota.post('/session/musico', new SessionMusicoController_1.SessionMusicoController().handle);
rota.use(Auth_1.Jwt);
rota.patch('/update/adm', new TrocaInformacoesAdmController_1.TrocaInformacoesAdmController().atualizar);
rota.get('/infor/adm', new InformacoesAdmController_1.InformacoesAdmController().handle);
//ROTAS MUSICO
rota.post('/create/musico', IsAdm_1.IsAdm, new CreateMusicoController_1.CreateMusicoController().create);
rota.patch('/update/musico', new TrocaDeInformacoesMusicoController_1.TrocaDeInformacoesMusicoController().update);
rota.delete('/remove/musico', IsAdm_1.IsAdm, new RemoveMusicoController_1.RemoveMusicoController().handle);
rota.post('/lista/musico', IsAdm_1.IsAdm, new ListagemMusicoController_1.ListagemMusicoController().show);
rota.get('/agendar/musico', new VerAgendarDoMusicoController_1.VerAgendarDoMusicoController().handle);
// ROTAS DE AGENDAMENTOS
rota.post('/create/agendamento', IsAdm_1.IsAdm, new CreateAgendamentoController_1.CreateAgendamentoController().create);
rota.delete('/remove/agendamento', IsAdm_1.IsAdm, new RemoveAgendamentoController_1.RemoveAgendamentoController().remove);
rota.get('/lista/agendamento', IsAdm_1.IsAdm, new ListaAgendamentoController_1.ListaAgendamentoController().show);
rota.get('/detalhe/agendamento', new detalheAgendamentoController_1.detalheAgendamentoController().detalhe);
rota.patch('/atualizando/agendamento', IsAdm_1.IsAdm, new atualizarAgendamentoController_1.atualizarAgendamentoController().handle);
// ROTAS DE BANDA 
rota.post('/create/banda', IsAdm_1.IsAdm, new createBandaController_1.CreateBandaController().create);
rota.get('/lista/banda', IsAdm_1.IsAdm, new ListaBandaController_1.ListaBandaController().show);
rota.delete('/remove/banda', IsAdm_1.IsAdm, new RemovebandaController_1.RemoveBandaController().remove);
rota.patch('/atualizando/banda', IsAdm_1.IsAdm, new ConfirmacarBandaController_1.ConfirmacarBandaController().handle);
//ROTAS LOUVORES
rota.post('/create/louvor', IsAdm_1.IsAdm, new CreateLouvorController_1.CreateLouvorController().create);
rota.delete('/remove/louvor', IsAdm_1.IsAdm, new RemoveLouvorController_1.RemoveLouvorController().remove);
rota.get('/lista/louvor', IsAdm_1.IsAdm, new ListaLouvorController_1.ListaLouvorController().show);
rota.get('/detalhe/louvor', new DetalheLouvorController_1.DetalheLouvorController().handle);
rota.patch('/atualizando/louvor', new atualizandoLouvorController_1.atualizandoLouvorController().handle);
//ROTAS LOUVORES A TOCAR
rota.post('/create/agendamento/louvor', IsAdm_1.IsAdm, new createLouvorATocarController_1.createLouvorATocarController().handle);
rota.get('/lista/agendamento/louvor', new ListaLouvorATocarController_1.ListaLouvorATocarController().handle);
rota.delete('/remove/agendamento/louvor', IsAdm_1.IsAdm, new RemoveLouvorATocarController_1.RemoveLouvorATocarController().delete);
