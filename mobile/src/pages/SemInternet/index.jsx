import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Descricao, Section, Titulo } from './styled';

export default function SemInternet() {
    return (
        <Container>
            <MaterialCommunityIcons name="network-strength-3-alert" size={100} color="#fff" />
            <Section>
                <Titulo>Sem Internet</Titulo>
                <Descricao>Para usar esse aplicativo, é necessário conexão com a internet</Descricao>
            </Section>
        </Container>
    )
}