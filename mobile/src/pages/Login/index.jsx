import React, { useState } from "react";

import { Container, Box, Img, Input, ButtonLogin, ButtonLoginText } from "./style";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin() {
        console.log(`esse é seu email: ${email} | sua senha: ${senha}`)
    }

    return (
        <Container>
            <StatusBar style="light"/>
            <Img source={require('../../imgs/logo.png')} />
            <Box>
                <Input
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={text => setEmail(text)} />

                <Input
                    placeholder='Digite sua senha' 
                    secureTextEntry={true} 
                    value={senha} 
                    onChangeText={text => setSenha(text)} />

                <ButtonLogin onPress={handleLogin} >
                    <Entypo name='login' size={25} color="#fff"/>
                    <ButtonLoginText>Login</ButtonLoginText>
                </ButtonLogin>
            </Box>
        </Container>
    )
}