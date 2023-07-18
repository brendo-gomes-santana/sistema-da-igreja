import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Painel from '../Pages/Painel';

import Privida from './Privida';
import Auth from '../contexts/Auth';
export default function Rotas() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/painel' element={<Privida> <Painel /> </Privida>} />
        </Routes>
      </Auth>
    </Router>
  )
}
