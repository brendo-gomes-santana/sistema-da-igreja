import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import * as Notifications from 'expo-notifications';

import Model from "../../components/Model";
import api from '../../service';
import { Container, Title, Email, Button, TitleButton } from "./styles";
export default function User() {

    const { user, deslogar, setUser } = useContext(AuthContext);
    const [ativoModel, setAtivoModel] = useState(false);

    const [codigo, setCodigo] = useState('');
    const [validarCodigo, setValidarCodigo] = useState(false);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        (async () => {
            const token = (await Notifications.getExpoPushTokenAsync()).data;

            if (token !== user.codigo) {
                setCodigo(token);
                setValidarCodigo(true);
                return 
            } else {
                return setValidarCodigo(false);
            }

        })()
    }, [])

    async function handleAlterarCodigo(){
      try{
        const r = await api.patch('/update/musico', {
            codigo
        },{
            params: {
                api_key: process.env.EXPO_PUBLIC_API_KEY,
                id_musico: user.id
            }
        })

        console.log(r.data);
        const { id, nome, email, codigo } = r.data;
        setUser({
            id: id,
            nome: nome, 
            email: email,
            codigo: codigo,
            token: user.token
        })
        
      }catch(err){
        console.log(err)
      } 
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