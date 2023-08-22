import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Model from "../../components/Model";

import { Container, Title, Email, Button, TitleButton } from "./styles";
export default function User() {

    const { user, deslogar } = useContext(AuthContext);
    const [ativoModel, setAtivoModel] = useState(false);
    return (
        <Container>
            <Title>Olá {user.nome}</Title>
            <Email>{user.email}</Email>


            <Button onPress={() => setAtivoModel(true)} color='#7bc26f'>
                <TitleButton>Alterar Senha</TitleButton>
            </Button>

            <Button color='#B98989' onPress={() => deslogar()} >
                <TitleButton>Sair</TitleButton>
            </Button>
            <Model ativado={ativoModel} ativador={setAtivoModel} id={user.id}/>
        </Container>
    )
}