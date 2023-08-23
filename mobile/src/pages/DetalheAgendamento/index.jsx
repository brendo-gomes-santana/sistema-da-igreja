
import React from 'react'
import { Container, Header, Button, Title, Section } from './styled'
import { AntDesign } from '@expo/vector-icons';

export default function DetalheAgendamento({navigation}) {
    return (
        <Container>
            <Header>
                <Button onPress={ () => navigation.goBack()}>
                    <AntDesign name="back" size={24} color="black" />
                </Button>
                <Title>Detalhe do agendamento</Title>
            </Header>
            <Section>

                
            </Section>
        </Container>
    )
}