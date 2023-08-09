import React, { useState } from 'react'
import { useMutation } from 'react-query';

import Header from '../../components/Header';

import styles from './styles.module.scss';
import api from '../../Service';

export default function CriarMusica() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [tipo, setTipo] = useState(null)

    const cadastrar = useMutation({
        mutationFn: async ({ nome, email, tipo }) => {
            return api.post('/create/musico', {
                nome,
                email,
                tipo
            }, {
                params: {
                    id_adm: adm.id,
                    api_key: process.env.React_App_API_KEY
                }
            }).then((r) => r.data)
        },
        onSuccess: () => {
            setEmail('')
            setNome('')
            setTipo('')
        }
    })
    async function handleCadastrarMusico(e) {
        e.preventDefault();
        if(!nome || !email || !tipo){
            return alert('Preenchar todo os campos')
        }

        cadastrar.mutate({ nome: nome, email: email, tipo: tipo })
    }
    return (
        <>
            <Header administrador={true}/>
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
                    <div className={styles.baseInput}>
                        <label>Tipo...: </label>
                        <select value={ tipo } onChange={ v => setTipo(v.target.value)}>
                            <option value={null}>Selecione o modelo</option>
                            <option value='On Fire'>On fire</option>
                            <option value='Geral'>Geral</option>

                        </select>
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
