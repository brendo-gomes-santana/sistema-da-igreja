import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import ReactDOM from 'react-dom/client';
import Rotas from './Rotas';

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import './global.css';
const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer
      autoClose={3000} />
    <QueryClientProvider client={client}>
      <Rotas />
    </QueryClientProvider>
  </>
);
