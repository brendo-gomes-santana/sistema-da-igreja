import React, { useState } from "react";
import api from "../../service";
import { Modal, ActivityIndicator } from 'react-native';
import { Container, Title, Input, Button, TitleButton, BaseButton } from "./styled";

export default function Model({ ativado, ativador, id }) {

    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    function handleCancelar() {
        ativador(false);
        setConfirmarSenha('');
        setSenha('');
    }

    async function handleAlterarFecha() {

        if(senha === '' || confirmarSenha === ''){
            alert('Preenchar os campos')
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não batem')
            return;
        }
        setCarregando(true)
        await api.patch('/update/musico', {
            senha
        }, {
            params: {
                id_musico: id,
                api_key: process.env.EXPO_PUBLIC_API_KEY
            }
        }).then(() => {
            ativador(false)
            setCarregando(false)
            setSenha('')
            setConfirmarSenha('')
        }).catch((err) => {
            console.log(err)
            setCarregando(false)
        })
    }

    return (
        <Modal
            animationType="slide"
            visible={ativado}
        >
            <Container>
                <Title>Alterar Senha</Title>
                <Input placeholder="Digite a nova senha" value={senha} onChangeText={t => setSenha(t)} />
                <Input placeholder="Confirme a senha" value={confirmarSenha} onChangeText={t => setConfirmarSenha(t)} />
                <BaseButton>
                    <Button color='#7bc26f' onPress={handleAlterarFecha} disabled={carregando}>
                        {carregando ? (
                            <ActivityIndicator size={25} color='#fff' />
                        ) : (
                            <TitleButton>
                                Alterar Senha
                            </TitleButton>
                        )}
                    </Button>
                    <Button color='#B98989' onPress={handleCancelar}>
                        <TitleButton>
                            Cancela
                        </TitleButton>
                    </Button>
                </BaseButton>
            </Container>
        </Modal>
    )

}