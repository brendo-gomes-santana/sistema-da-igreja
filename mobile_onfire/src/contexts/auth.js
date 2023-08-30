import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Network from 'expo-network';

import api from "../service";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [carregarLogar, setCarregarLogar] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [conexao, setConexao] = useState(false);
    
    useEffect(() => {
        (async () => {
            const user = JSON.parse(await AsyncStorage.getItem('@user'))
            const conexao = await Network.getNetworkStateAsync();

            if(!conexao.isConnected && !conexao.isInternetReachable){
                setConexao(false);
                return;
            }

            if(!user) {
                setUser(null);
                setCarregando(false);
                return;
            }
            setUser(user)
            setCarregando(false);
            api.defaults.headers['Authorization'] = `Bearer ${user.token}`;
        })()
    }, [])

    async function logar(email, senha) {
        setCarregarLogar(true);
        
        await api.post('/session/musico', {
            email,
            senha
        }, {
            params: {
                api_key: process.env.EXPO_PUBLIC_API_KEY
            }
        }).then((r) => {
            const { token } = r.data;
            setUser(r.data)
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            (async () => {
                await AsyncStorage.setItem('@user', JSON.stringify(r.data))
            })()
            
            setCarregarLogar(false);
        })
            .catch((err) => {
                setCarregarLogar(false);
                console.log(err.response.data.error)
            })
    }

    async function deslogar() {
        await AsyncStorage.clear()
        setUser(null)
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                logar,
                setUser,
                carregarLogar,
                logado: !!user,
                carregando,
                deslogar,
                conexao
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}