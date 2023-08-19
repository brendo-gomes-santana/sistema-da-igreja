import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import Login from '../pages/Login';
import RotasLogadas from "./auth.router";

import { AuthContext } from "../contexts/auth";

export default function Routes(){

    const { logado, carregando } = useContext(AuthContext)

    if(carregando){
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#1B3358',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size={80} color='#fff'/>
            </View>
        )     
    }

    return(
        logado ? <RotasLogadas/> :  <Login/>
    )
}