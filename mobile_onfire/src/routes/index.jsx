import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";


import Login from '../pages/Login';
import RotasLogadas from "./auth.router";
import SemInternet from "../pages/SemInternet";
import { AuthContext } from "../contexts/auth";



export default function Routes(){

    const { logado, carregando, conexao } = useContext(AuthContext)

    if(carregando){
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size={80} color='#fff'/>
            </View>
        )     
    }
    if(conexao){
        return(
            <SemInternet/>
        )
    }
    return(
        logado ? <RotasLogadas/> :  <Login/>
    )
}