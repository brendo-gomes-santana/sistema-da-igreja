import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import ReactDOM from 'react-dom/client';
import Rotas from './Rotas';



import './global.css';
const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
 
        <Rotas />
     
    </QueryClientProvider>
  </React.StrictMode>
);
