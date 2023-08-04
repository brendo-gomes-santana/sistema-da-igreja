import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Painel from '../Pages/Painel';
import CriarMusica from '../Pages/CriarMusico';
import ListaMusico from '../Pages/ListaMusico';
import CriarLouvor from '../Pages/CriarLouvor';
import ListaLouvores from '../Pages/ListaLouvores';
import DetalheLouvor from '../Pages/DetalheLouvor';
import NovoEvento from '../Pages/NovoEvento';
import Usuario from '../Pages/Usuario';
import NovoEvento2 from '../Pages/NovoEvento_2';
import NovoEvento3 from '../Pages/NovoEvento_3';

import Privida from './Privida';
import Auth from '../contexts/Auth';

export default function Rotas() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/painel' element={<Privida> <Painel /> </Privida>} />
          <Route path='/criar/musico' element={ <Privida> <CriarMusica/> </Privida> } />
          <Route path='/lista/musico' element={ <Privida> <ListaMusico/> </Privida> }/>
          <Route path='/criar/louvor' element={ <Privida> <CriarLouvor/> </Privida> } />
          <Route path='/lista/louvor' element={ <Privida> <ListaLouvores/> </Privida> }/>
          <Route path='/:seguranca/detalhe/louvor/:id' element={ <Privida> <DetalheLouvor/> </Privida> }/>
          <Route path='/usuario/:seguranca/:id' element={ <Privida> <Usuario/> </Privida> }/>
          <Route path='/criar/evento' element={<Privida> <NovoEvento/> </Privida> }/>
          <Route path='/criar/evento/2/:id_agendamento' element={ <Privida> <NovoEvento2/> </Privida> }/>
          <Route path='/criar/evento/3/:id_agendamento' element={ <Privida> <NovoEvento3/> </Privida> }/>
          <Route path='/:seguranca/detalhe/agendamento/:id_agendamento' element={ <Privida> <NovoEvento3/> </Privida> }/>
        </Routes>
      </Auth>
    </Router>
  )
}
