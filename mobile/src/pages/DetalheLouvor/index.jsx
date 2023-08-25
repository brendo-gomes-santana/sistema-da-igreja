import React from 'react'
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Titulo, Container, Letra, BaseInfor, Youtube, BaseTitulo } from './styled';
import api from '../../service/';

export default function DetalheLouvor({ route }) {
    const [loading, setLoading] = useState(true);
    const [louvor, setLouvor] = useState(null);

    const { id_louvor } = route.params;

    useEffect(() => {
        (async () => {

            try {
                const r = await api.get('/detalhe/louvor', {
                    params: {
                        api_key: process.env.EXPO_PUBLIC_API_KEY,
                        id: id_louvor
                    }
                })
                setLouvor(r.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [id_louvor])

    if (loading) {
        return (
            <View style={{ marginTop: 25 }}>
                <ActivityIndicator color='#000' size={50} />
            </View>
        )
    }

    return (
        <Container>
            <BaseInfor>
                <BaseTitulo>
                    <Titulo>{louvor.nome}</Titulo>
                    <Titulo>Tom: {louvor.tom}</Titulo>
                </BaseTitulo>
                <Youtube onPress={() => Linking.openURL(louvor.link)}>
                    <AntDesign name="youtube" size={50} color="red" />
                </Youtube>
            </BaseInfor>
            <Titulo>Letra</Titulo>
            <Letra>{louvor.letra === '' ? 'Não possui letra' : louvor.letra}</Letra>
        </Container>
    )
}