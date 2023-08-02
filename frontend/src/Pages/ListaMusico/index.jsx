import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useQuery, useMutation } from 'react-query';
import { motion } from 'framer-motion';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import api from '../../Service';

export default function ListaMusico() {

    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const { data, isLoading, refetch } = useQuery('lista-musicos', async () => {
        return api.get('/lista/musico', {
            params: {
                api_key: 'SistemaDaIgreja',
                id_adm: adm.id
            }
        }).then((r) => r.data)
    })

    const deleta = useMutation({
        mutationFn: async ({ id }) => {
            return api.delete('/remove/musico', {
                params: {
                    api_key: 'SistemaDaIgreja',
                    id_adm: adm.id,
                    id_musico: id
                }
            }).then((r) => r.data)
        },
        onSuccess: () => {
            refetch()
        }
    })

    return (
        <>
            <Header administrador={true}/>
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Lista de Músicos</h1>
                </article>

                {isLoading && (
                    <p>Carregando Informações</p>
                )}
                {data?.length === 0 && (
                    <p>Cadastre os Musicos</p>
                )}
                {data?.map((musico) => {
                    return (
                        <motion.article
                            className={styles.lista} 
                            key={musico.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            >
                            <p>{musico.nome}</p>
                            <AiFillDelete onClick={() => deleta.mutate({ id: musico.id })} />
                        </motion.article>
                    )
                })}

            </section>
        </>
    )
}
