import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ActivityIndicator, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';


import { AuthContext } from "../../contexts/auth";
import { Container, Box, Img, Input, ButtonLogin, ButtonLoginText, ImgInput } from "./style";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


export default function Login() {

    const { logar, carregarLogar } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        logar(email, senha, token)
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