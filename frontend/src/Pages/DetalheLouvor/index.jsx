import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams, Navigate, Link } from 'react-router-dom';

import api from '../../Service';
import Header from '../../components/Header';
import styles from './styles.module.scss';

export default function DetalheLouvor() {

    const { id, seguranca } = useParams()
    const [alterar, setAlterar] = useState(true)
    const { data, isLoading } = useQuery('detalhe-louvor', async () => {
        return api.get('/detalhe/louvor', {
            params: {
                api_key: 'SistemaDaIgreja',
                id
            }
        }).then((r) => r.data)
    })
    if (isLoading) {
        return (
            <p>carregando Informação</p>
        );
    }
    if (!data) {
        return <Navigate to='/lista/louvor' />
    }
    return (
        <>
            <Header />
            <section className={styles.container}>
                <article className={styles.title}>
                    <Link to='/lista/louvor'>Volta</Link>
                    <h1>Detalhe do louvor - {data?.nome}</h1>
                </article>

                <form className={styles.form}>
                    <div className={styles.tom_alterar}>
                        <div className={styles.tom}>
                            <label>Tom:</label>
                            <select disabled={alterar}>
                                <option>{data.tom}</option>
                            </select>
                        </div>
                        {seguranca === 'adm' && (
                            !alterar ? (
                                <div>
                                    <button type='submit' >Salvar</button>
                                    <button onClick={() => setAlterar(true)} 
                                    style={{ backgroundColor: 'var(--vermelho-claro)' }}
                                    >Cancelar</button>
                                </div>
                            ) :
                                (
                                    <button onClick={() => setAlterar(false)}>Alterar</button>
                                )
                        )}
                    </div>
                    <a href={data.link !== '' ? data.link : `https://www.youtube.com/results?search_query=${data.nome}`} target='blank'>Yotube</a>
                    <textarea disabled={alterar} className={styles.letra} value={data.letra}/>
                </form>
            </section>
        </>
    )
}
