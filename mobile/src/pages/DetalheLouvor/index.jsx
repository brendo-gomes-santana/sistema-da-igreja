import React from 'react'
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Titulo, Container, Letra } from './styled';
import api from '../../service/';

export default function DetalheLouvor({route}) {
    const [loading, setLoading] = useState(true);
    const [louvor, setLouvor] = useState(null);

    const { id_louvor } = route.params;

    useEffect(() => {
        (async ()=> {
            
            try{
                const r = await api.get('/detalhe/louvor',{
                    params: {
                        api_key: process.env.EXPO_PUBLIC_API_KEY,
                        id: id_louvor
                    }
                })
                setLouvor(r.data)
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        })()
    },[id_louvor])

    if(loading){
        return(
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }

  return (
    <Container>
      <Titulo>{louvor.nome}</Titulo>
      <Titulo>Tom: {louvor.tom}</Titulo>
      <Titulo>Letra</Titulo>
      <Letra>{louvor.letra}</Letra>
    </Container>
  )
}