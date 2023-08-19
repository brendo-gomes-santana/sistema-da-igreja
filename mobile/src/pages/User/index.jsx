import React, { useContext } from "react";
import { Container, Title, Email } from "./styles";

import { AuthContext } from "../../contexts/auth";


export default function User(){

    const { user } = useContext(AuthContext);
    
    return(
        <Container>
            <Title>Olá {user.nome}</Title>
            <Email>{user.email}</Email>
        </Container>
    )
}