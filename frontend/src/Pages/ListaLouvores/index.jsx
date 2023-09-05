import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import api from '../../Service';

export default function ListaLouvores() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery('Lista-louvores', async () => {
        return api.get('/lista/louvor', {
            params: {
                id_adm: adm.id,
                api_key: process.env.React_App_API_KEY
            }
        }).then((r) => r.data)
    })

    const deletaLouvor = useMutation({
        mutationFn: async ({id}) => {
            return api.delete('/remove/louvor', {
                params: {
                    id_adm: adm.id,
                    api_key: process.env.React_App_API_KEY,
                    id: id
                }  
            }).then((r) => r.data);
        },
        onSuccess: (data) => {
             queryClient.setQueryData("Lista-louvores", (antigaData) => antigaData.filter((infor) => infor.id !== data.id));
        }
    }) 
    return (
        <>
            <Header administrador={true}/>
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
                        <motion.article 
                        className={styles.lista} 
                        key={louvor.id}
                        initial={{y: 10, opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                            <p>{louvor.nome}</p>
                            <span> {louvor.tom === '' ? 'tom não informado' : louvor.tom}</span>
                            <div className={styles.containerIcon}>
                                <Link to={`/adm/detalhe/louvor/${louvor.id}`} >
                                    <FaEye />
                                </Link>
                                <AiFillDelete onClick={ () => deletaLouvor.mutate({id: louvor.id})} />
                            </div>
                        </motion.article>
                    )
                })}

            </section>
        </>
    )
}
