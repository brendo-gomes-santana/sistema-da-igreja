import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Painel from '../Pages/Painel';
import CriarMusica from '../Pages/CriarMusico';
import ListaMusico from '../Pages/ListaMusico';
import CriarLouvor from '../Pages/CriarLouvor';
import ListaLouvores from '../Pages/ListaLouvores';

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
        </Routes>
      </Auth>
    </Router>
  )
}
