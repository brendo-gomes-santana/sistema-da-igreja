import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

import { AuthContext } from "../../contexts/auth";
import { Container, Box, Img, Input, ButtonLogin, ButtonLoginText, ImgInput } from "./style";

export default function Login() {

    const { logar, carregarLogar } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function handleLogin() {
        logar(email, senha)
    }

    return (
        <Container>
            <StatusBar style="light" />
            <Img source={require('../../imgs/logo.png')} />
            <Box>
                <ImgInput>
                    <FontAwesome5 name="user-alt" size={40} color="#a9a9a9" style={{
                        position: 'absolute',
                        zIndex: 1000,
                        left: 10
                    }} />
                    <Input
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={text => setEmail(text)} />
                </ImgInput>
                <ImgInput>
                    <Entypo name="lock" size={40} color="#a9a9a9"
                        style={{
                            position: 'absolute',
                            zIndex: 1000,
                            left: 10
                        }}
                    />
                    <Input
                        placeholder='Digite sua senha'
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={text => setSenha(text)} />
                </ImgInput>

                <ButtonLogin onPress={handleLogin} >

                    {carregarLogar ? (
                        <ActivityIndicator size={40} color="#fff" />
                    ) : (
                        <>
                            <Entypo name='login' size={25} color="#fff" />
                            <ButtonLoginText>Login</ButtonLoginText>
                        </>
                    )}

                </ButtonLogin>
            </Box>
        </Container>
    )
}