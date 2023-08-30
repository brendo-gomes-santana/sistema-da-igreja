import React from 'react'
import { Container, Nome } from './styled'
export default function ListLouvor({ louvor, navigation }) {

    return (
        <Container onPress={() => navigation.navigate('detalhe-louvor', { id_louvor: louvor.louvor.id })}>
            <Nome>{louvor.louvor.nome}</Nome>
        </Container>
    )
}