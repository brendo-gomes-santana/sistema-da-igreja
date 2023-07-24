import React, { createContext } from "react";
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";

import api from "../Service";

export const AuthContext = createContext({})

export default function Auth({children}) {

  const navigata = useNavigate()

  const Login = useMutation({ 
    mutationFn: ({email, senha}) => {
      return api.post('/session/adm', {
        email,
        senha
      },
      {
        params: {
          api_key: 'SistemaDaIgreja'
        }
      }).then((r) => r.data)
    },
    onSuccess: (data) => {
      localStorage.setItem('@InforUser' , JSON.stringify(data))
      api.defaults.headers.common['Authorization'] = data.token;
      navigata('/painel')
    },
    onError: (err) => {
      alert(err.response.data.error)
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
