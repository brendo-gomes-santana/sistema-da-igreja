import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { ActivityIndicator, View, Alert } from "react-native";
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Model from "../../components/Model";
import api from '../../service';
import { Container, Title, Email, Button, TitleButton, Tipo } from "./styles";

export default function User() {

    const { user, deslogar, setUser } = useContext(AuthContext);
    const [ativoModel, setAtivoModel] = useState(false);

    const [codigo, setCodigo] = useState('');
    const [validarCodigo, setValidarCodigo] = useState(true);
    const [carregando, setCarregando] = useState(true);

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }
    
      useEffect(() => {
        if (requestUserPermission()) {
          //returno fcm token for the device
    
          messaging().getToken().then(token => {
            setCodigo(token);
            if(token !== user.codigo){
                setValidarCodigo(true);
                setCarregando(false);
            }else{
                setValidarCodigo(false);
                setCarregando(false);
            }
          })
        } else {
          console.log('Erro a pegar o token')
        }
    
        messaging()
          .getInitialNotification()
          .then(async (remoteMessage) => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
            }
          });
    
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        });
    
        // Register background handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });
    
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
        setCarregando(false);
        return unsubscribe;
      }, [])

    async function handleAlterarCodigo() {
        setCarregando(true);

        try {
            const r = await api.patch('/update/musico', {
                codigo: codigo
            }, {
                params: {
                    api_key: process.env.EXPO_PUBLIC_API_KEY,
                    id_musico: user.id
                }
            })
            let data = {
                id: r.data.id,
                nome: r.data.nome,
                email: r.data.email,
                tipo: r.data.tipo,
                token: user.id,
                codigo: codigo

            }

            await AsyncStorage.clear()
            await AsyncStorage.setItem('@user', JSON.stringify(data))
            setUser(data);
            setValidarCodigo(false);

        } catch (err) {
            console.log(err)
        } finally {
            setCarregando(false);
        }
    }

    if (carregando) {
        return (
            <View style={{ marginTop: 25 }}>
                <ActivityIndicator color='#000' size={50} />
            </View>
        )
    }

    return (
        <Container>
            <Title>Olá, {user.nome}</Title>
            <Tipo>{user.tipo}</Tipo>
            <Email>{user.email}</Email>


            <Button onPress={() => setAtivoModel(true)} color='#7bc26f'>
                <TitleButton>Alterar Senha</TitleButton>
            </Button>
            {validarCodigo && (
                <Button color='#7bc26f' onPress={() => handleAlterarCodigo()} >
                    <TitleButton>Cadastrar Notificação</TitleButton>
                </Button>
            )}
            <Button color='#B98989' onPress={() => deslogar()} >
                <TitleButton>Sair</TitleButton>
            </Button>
            <Model ativado={ativoModel} ativador={setAtivoModel} id={user.id} />
        </Container>
    )
}