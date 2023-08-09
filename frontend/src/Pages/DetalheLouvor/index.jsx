import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import api from '../../Service';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import { nota } from '../../Data';
import Loading from '../../components/Loading';

export default function DetalheLouvor() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))
    const { id, seguranca } = useParams()
    const navigate = useNavigate();

    const [alterar, setAlterar] = useState(true)
    const [tom, setTom] = useState('')
    const [link, setLink] = useState('')
    const [letra, setLetra] = useState('')

    const { data, isLoading, refetch } = useQuery('detalhe-louvor', async () => {
        return api.get('/detalhe/louvor', {
            params: {
                api_key: process.env.React_App_API_KEY,
                id
            }
        }).then((r) => r.data)
    })

    const alterarInformacao = useMutation({
        mutationFn: async ({ tom, link, letra }) => {
            return api.patch('/atualizando/louvor', {
                id: data.id,
                tom,
                link,
                letra
            }, {
                params: {
                    id_adm: adm.id,
                    api_key: process.env.React_App_API_KEY,
                }
            })
        },
        onSuccess: () => {
            refetch()
            setAlterar(true)
        }
    })

    useEffect(() => {
        if (!isLoading && data) {
            setTom(data.tom);
            setLink(data.link);
            setLetra(data.letra);
        }
    }, [isLoading, data]);

    if (isLoading) {
        return (
            <Loading/>
        );
    }

    if (!data) {
        return <Navigate to='/lista/louvor' />
    }
     function alterarInformacaoF(e){
        e.preventDefault()
        alterarInformacao.mutate({
                tom: tom,
                link: link,
                letra: letra
            })
     }
    return (
        <>
            <Header administrador={seguranca === 'adm' ? true : false} />
            <section className={styles.container}>
                <article className={styles.title}>
                    <button onClick={ () => navigate(-1)}>Volta</button>
                    <h1>Detalhe do louvor - {data?.nome}</h1>
                </article>

                <form className={styles.form} onSubmit={alterarInformacaoF}>
                    <div className={styles.tom_alterar}>
                        <div className={styles.tom}>
                            <label>Tom:</label>
                            <select disabled={alterar} value={tom} onChange={v => setTom(v.target.value)}>
                                <option>{data.tom}</option>
                                {nota.map((i) => {
                                    return(
                                        <option key={i.id} value={i.tom}>{i.tom}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {seguranca === 'adm' && (
                            !alterar ? (
                                <div>
                                    <button type='submit'>{alterarInformacao.isLoading ? 'Carregando...' : 'Salvar'}
                                    </button>
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
                    {alterar ? (
                        <a href={data.link !== '' ? data.link : `https://www.youtube.com/results?search_query=${data.nome}`} target='blank'>Yotube</a>
                    ) : (
                        <div className={styles.link}>
                            <label>Link:</label>
                            <input type="text" value={link} onChange={v => setLink(v.target.value)} />
                        </div>
                    )}
                    <textarea
                        disabled={alterar}
                        className={styles.letra}
                        value={letra}
                        onChange={v => setLetra(v.target.value)} />
                </form>
            </section>
        </>
    )
}
