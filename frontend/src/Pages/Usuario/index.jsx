import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import api from '../../Service';

export default function Usuario() {

    const { seguranca, id } = useParams()

    const [alterar, setAlterar] = useState(false)
    const [novaSenha, setNovaSenha] = useState(false)

    const { data } = useQuery('usuario', async () => {
        return api.get('/infor/adm', {
            params: {
                api_key: 'SistemaDaIgreja',
                id_adm: id
            }
        }).then((r) => r.data)
    })
    return (
        <>
            <Header administrador={seguranca === 'adm' ? true : false} />
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Configuração</h1>
                </article>

                {!alterar && (
                    <button onClick={() => setAlterar(true)}>Alterar Informação</button>
                )}
                <form>
                    <div className={styles.baseInput}>
                        <label htmlFor="">Nome: </label>
                        <input type="text" value={data?.nome} disabled={!alterar} />
                    </div>
                    <div className={styles.baseInput}>
                        <label htmlFor="">Email: </label>
                        <input type="email" value={data?.email} disabled={!alterar} />
                    </div>

                    {alterar && (
                        <div className={styles.baseButton}>
                            <span onClick={() => setAlterar(false)}>Cancela</span>
                            <button type='submit'>Salvar</button>
                        </div>
                    )}

                </form>

                <button>Alterar Senha</button>

                <article className={styles.baseModel}>
                    <form 
                    className={styles.boxModel}>
                        <input type="text" placeholder='Digite a nova senha'/>
                        <input type="text" placeholder='Confirme a senha'/>
                        <button type='submit'>Salvar</button>
                    </form>
                </article>
            </section>
        </>

    )
}
