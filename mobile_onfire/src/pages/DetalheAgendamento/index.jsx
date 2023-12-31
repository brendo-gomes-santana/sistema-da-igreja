import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { format } from 'date-fns';

import ListLouvor from '../../components/ListLouvor';
import { Container, Header, Button, Title, Section, Infor, Titulo, Descricao, TituloLouvor } from './styled'
export default function DetalheAgendamento({ route, navigation }) {

    const { agendar } = route.params;

    return (
        <Container>
            <Header>
                <Button onPress={() => navigation.goBack()}>
                    <AntDesign name="back" size={24} color="black" />
                </Button>
                <Title>Detalhe do agendamento</Title>
            </Header>
            <Section>
                <Infor><Titulo>Data: </Titulo> {format(new Date(agendar.agendamento.data), 'dd/MM/yyyy')}</Infor>
                <Infor><Titulo>Horário: </Titulo> {agendar.agendamento.horario_para_chegar}h</Infor>
                <Infor><Titulo>Status: </Titulo> {agendar.agendamento.status}</Infor>
                <Descricao>{agendar.agendamento.descricao}</Descricao>
                <TituloLouvor>Louvores</TituloLouvor>
                <FlatList
                    data={agendar.agendamento.louvorATocar}
                    renderItem={({ item }) => <ListLouvor louvor={item} navigation={navigation} />}
                />

            </Section>
        </Container>
    )
}