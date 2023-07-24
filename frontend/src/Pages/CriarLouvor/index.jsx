import React, { useState } from 'react'
import { useMutation } from 'react-query';
import styles from './styles.module.scss';

import Header from '../../components/Header';
import api from '../../Service';
import { nota } from '../../Data';
export default function CriarLouvor() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const [nome, setNome] = useState('')
    const [tom, setTom] = useState('')
    const [link, setLink] = useState('')
    const [letra, setLetra] = useState('')

    async function handleCadastrarLouvor(e) {
        e.preventDefault()
        cadastrarLouvor.mutate({nome:nome, tom:tom, link:link, letra:letra})
    }
    const cadastrarLouvor = useMutation({
        mutationFn: async ({nome, tom, link, letra}) => {
            return api.post('/create/louvor', {
                nome,
                tom,
                link,
                letra
            }, {
                params: {
                    id_adm: adm.id,
                    api_key: 'SistemaDaIgreja'
                }
            })
        },
        onSuccess: (data) => {
            setNome('')
            setTom('')
            setLink('')
            setLetra('')
        }
    })
    return (
        <>
            <Header />
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Novo Louvor</h1>
                </article>

                <form className={styles.form} onSubmit={handleCadastrarLouvor}>
                    <div className={styles.BoxInput}>
                        <label>Nome: </label>
                        <input type="text" placeholder='Digite o nome do louvor'
                            value={nome} onChange={v => setNome(v.target.value)} />
                    </div>
                    <div className={styles.BoxInput}>
                        <label>Tom..: </label>
                        <select value={tom} onChange={v => setTom(v.target.value)}>
                            <option>Selecione - não é obrigatório</option>
                            {nota.map((i) => {
                                return(
                                    <option key={i.id} value={i.tom}>{i.tom}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={styles.BoxInput}>
                        <label>Link..:</label>
                        <input type="text" placeholder='Link da musica do youtube - não é obrigatório' 
                        value={ link } onChange={ v => setLink(v.target.value)}/>
                    </div>
                    <div id={styles.baseTextarea}>
                        <label>Letra.:</label>
                        <textarea placeholder='não é obrigatório' 
                        value={ letra } onChange={ v => setLetra(v.target.value)}/>
                    </div>

                    <button type='submit'>{cadastrarLouvor.isLoading ? 'Carregando' : 'Cadastrar'}</button>
                </form>
            </section>
        </>
    )
}
