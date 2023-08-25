import React from 'react'
import { format } from 'date-fns';
import { Container, Title } from './styled';

export default function ListAgendar({navigation,agendar}) {

  return (
    <Container onPress={ () => navigation.navigate('detalhe', {agendar})}>
      <Title>{agendar.agendamento.status}</Title>
      <Title>{ format(new Date(agendar.agendamento.data), 'MM/dd/yyyy')}</Title>
      <Title>{agendar.agendamento.horario_para_chegar}h</Title>
    </Container>
  )
}