import React, { useEffect, useContext, useState } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";

import api from '../../service';
import { AuthContext } from '../../contexts/auth';
import ListAgendar from "../../components/ListAgendar";
import { Container, Verificar, VerificarTitle, Base } from "./styled";

export default function Home({ navigation }) {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const [agendas, setAgendas] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const r = await api.get(`/agendar/musico?api_key=${process.env.EXPO_PUBLIC_API_KEY}&id=${user.id}`)
                setAgendas(r.data)
            } catch (err) {
                console.log(err.response.data.error)
            } finally {
                setLoading(false);
            }
        })()
    }, [])
    async function handleVerificar() {
        setLoading(true);
        try {
            const r = await api.get(`/agendar/musico?api_key=${process.env.EXPO_PUBLIC_API_KEY}&id=${user.id}`)
            setAgendas(r.data)
        } catch (err) {
            console.log(err.response.data.error)
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return (
            <View style={{ marginTop: 25 }}>
                <ActivityIndicator color='#000' size={50} />
            </View>
        )
    }

    if (agendas.length === 0) {
        return (
            <View style={{ alignItems: 'center', marginTop: 25 }}>
                <Text style={{ fontSize: 18 }}>Você não possui agendamento</Text>
                <Verificar onPress={handleVerificar}>
                    <VerificarTitle>Atualizar</VerificarTitle>
                </Verificar>
            </View>
        )
    }

    return (
        <Container>
            <Base>
            <Verificar onPress={handleVerificar}>
                <VerificarTitle>Atualizar</VerificarTitle>
            </Verificar>
            </Base>

            <FlatList
                data={agendas}
                renderItem={({ item }) => <ListAgendar agendar={item} navigation={navigation} />}
                keyExtractor={item => item.id} />
        </Container>

    )
}