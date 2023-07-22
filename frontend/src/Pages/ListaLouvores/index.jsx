import React from 'react';
import { useQuery, useMutation } from 'react-query';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import api from '../../Service';
export default function ListaLouvores() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const { data, isLoading, refetch } = useQuery('Lista-louvores', async () => {
        return api.get('/lista/louvor', {
            params: {
                id_adm: adm.id,
                api_key: 'SistemaDaIgreja'
            }
        }).then((r) => r.data)
    })

    const deletaLouvor = useMutation({
        mutationFn: async ({id}) => {
            return api.delete('/remove/louvor', {
                params: {
                    id_adm: adm.id,
                    api_key: 'SistemaDaIgreja',
                    id: id
                }  
            })
        },
        onSuccess: () => {
            refetch()
        }
    }) 
    return (
        <>
            <Header />
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Lista de Louvores</h1>
                </article>
                {isLoading && (
                    <p>Carregando Informações</p>
                )}
                {data?.length === 0 && (
                    <p>Cadastre um louvor</p>
                )}
                {data?.map((louvor) => {
                    return (
                        <article className={styles.lista} key={louvor.id}>
                            <p>{louvor.nome}</p>
                            <span> {louvor.tom === '' ? 'tom não informado' : louvor.tom}</span>
                            <div className={styles.containerIcon}>
                                <Link>
                                    <FaEye />
                                </Link>
                                <AiFillDelete onClick={ () => deletaLouvor.mutate({id: louvor.id})} />
                            </div>
                        </article>
                    )
                })}

            </section>
        </>
    )
}
