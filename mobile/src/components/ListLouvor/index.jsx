import React from 'react'
import { Container, Nome } from './styled'
export default function ListLouvor({louvor}) {

    return (
    <Container>
      <Nome>{louvor.louvor.nome}</Nome>
    </Container>
  )
}