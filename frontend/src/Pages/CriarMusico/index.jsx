import React, { useState } from 'react'
import { useMutation } from 'react-query';

import Header from '../../components/Header';

import styles from './styles.module.scss';
import api from '../../Service';

export default function CriarMusica() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const cadastrar = useMutation({
        mutationFn: async ({ nome, email }) => {
            return api.post('/create/musico', {
                nome,
                email
            }, {
                params: {
                    id_adm: adm.id,
                    api_key: 'SistemaDaIgreja'
                }
            }).then((r) => r.data)
        },
        onSuccess: () => {
            setEmail('')
            setNome('')
        }
    })
    async function handleCadastrarMusico(e) {
        e.preventDefault();
        cadastrar.mutate({ nome: nome, email: email })
    }
    return (
        <>
            <Header />
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Novo Músico</h1>
                </article>

                <form onSubmit={handleCadastrarMusico} className={styles.form}>
                    <div className={styles.baseInput}>
                        <label>Nome.: </label>
                        <input type="text" placeholder='Digite o nome'
                            value={nome} onChange={v => setNome(v.target.value)} />
                    </div>
                    <div className={styles.baseInput}>
                        <label>E-mail: </label>
                        <input type="email" placeholder='Digite o email'
                            value={email} onChange={v => setEmail(v.target.value)} />
                    </div>
                    <button type='submit'> {cadastrar.isLoading ?
                        ('carregando...')
                        :
                        ('Cadastrar')}
                    </button>
                </form>
            </section>
        </>
    )
}
