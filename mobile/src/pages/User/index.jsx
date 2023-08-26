import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Alert, ActivityIndicator, View, Text } from "react-native";
import * as Notifications from 'expo-notifications';

import Model from "../../components/Model";
import api from '../../service';
import { Container, Title, Email, Button, TitleButton } from "./styles";
export default function User() {

    const { user, deslogar, setUser } = useContext(AuthContext);
    const [ativoModel, setAtivoModel] = useState(false);

    const [codigo, setCodigo] = useState('');
    const [validarCodigo, setValidarCodigo] = useState(false);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        (async () => {
            const token = (await Notifications.getExpoPushTokenAsync()).data;

            if (token !== user.codigo) {
                setCodigo(token);
                setValidarCodigo(true);
                setCarregando(false)
                return 
            } else {
                setCarregando(false);
                setValidarCodigo(false);
                return 
            }

        })()
    }, [])

    async function handleAlterarCodigo(){

        const { status } = await Notifications.getPermissionsAsync();
    
        if(status !== 'granted'){
            Alert.alert('Você não deu permissão para receber notificação')
            return;
        }
        
      try{
        const r = await api.patch('/update/musico', {
            codigo: codigo
        },{
            params: {
                api_key: process.env.EXPO_PUBLIC_API_KEY,
                id_musico: user.id
            }
        })   

        setUser({
            id: r.data.id,
            nome: r.data.nome,
            email: r.data.email,
            token: user.id,
            codigo: codigo

        }) 
        setValidarCodigo(false);
      }catch(err){
        console.log(err)
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
            <Title>Olá {user.nome}</Title>
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