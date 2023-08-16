import React from 'react'
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import api from '../../Service';
import { SchemaCadastrarMusico } from '../../validacao';

export default function CriarMusica() {
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaCadastrarMusico)
    });

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
            reset()
        }
    })
    async function handleCadastrarMusico(data) {
        cadastrar.mutate({ nome: data.nome, email: data.email, tipo: data.tipo })
    }
    return (
        <>
            <Header administrador={true} />
            <section className={styles.container}>
                <article className={styles.title}>
                    <h1>Novo Músico</h1>
                </article>

                <form onSubmit={handleSubmit(handleCadastrarMusico)} className={styles.form}>
                    <div className={styles.baseInput}>
                        <label>Nome.: </label>
                        <input type="text" placeholder='Digite o nome'
                            {...register('nome')} />
                    </div>
                    {errors.nome && <span> {errors.nome.message}</span>}
                    <div className={styles.baseInput}>
                        <label>E-mail: </label>
                        <input type="email" placeholder='Digite o email'
                            {...register('email')} />
                    </div>
                    {errors.email && <span>{errors.email.message}</span>}

                    <div className={styles.baseInput}>
                        <label>Tipo...: </label>
                        <select {...register('tipo')}>
                            <option value=''>Selecione o modelo</option>
                            <option value='On Fire'>On fire</option>
                            <option value='Geral'>Geral</option>
                        </select>
                    </div>
                    {errors.tipo && <span>{errors.tipo.message}</span>}

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
