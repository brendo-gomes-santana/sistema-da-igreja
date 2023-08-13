import React, { createContext } from "react";
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import api from "../Service";

export const AuthContext = createContext({})

export default function Auth({children}) {

  const navigata = useNavigate()

  const Login = useMutation({ 
    mutationFn: async ({email, senha}) => {
      return api.post('/session/adm', {
        email,
        senha
      },
      {
        params: {
          api_key: process.env.React_App_API_KEY
        }
      }).then((r) => r.data)
    },
    onSuccess: (data) => {
      localStorage.setItem('@InforUser' , JSON.stringify(data))
      api.defaults.headers.common['Authorization'] = data.token;
      navigata('/painel');
      toast.success(`Bem vindo ${data.nome}`)
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    }
  })
  function deslogar (){
    localStorage.clear()
    navigata('/')
  }
  return (
    <AuthContext.Provider value={{
      Login,
      deslogar,
      carregandoSession: Login.isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  )
}
