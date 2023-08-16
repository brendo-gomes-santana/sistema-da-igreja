import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import { BiSolidUser, BiAlbum } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import InputSenha from '../../components/InputSenha';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import img from '../../imgs/logo.png';
import Loading from '../../components/Loading';
import { Schemalogin } from '../../validacao';

export default function Login() {

    const { Login, carregandoSession } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Schemalogin)
    });

    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('@InforUser'))

        if (!!usuario) {
            navigate('/painel')
            setCarregando(false)
            return
        }
        setCarregando(false)
    }, [navigate])

    async function handleLogin(data) {
       Login.mutate(
            {
                email: data.email,
                senha: data.senha
            }
        )
    }

    if (carregando) {
        return <Loading />
    }

    return (
        <section className={styles.container}>
            <img src={img} alt="logo" />
            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <div className={styles.ContainerInput}>
                    <div>
                        <BiSolidUser />
                        <input type='email'
                            placeholder={errors.email ? errors.email.message : 'E-mail'}
                            {...register('email')}
                            style={errors.email && { border: '1px solid #ff0000' }}
                        />
                    </div>
                    <InputSenha placeholder={errors.senha ? errors.senha.message : 'Senha'}
                        register={register}
                        mostrarIcon={true}
                        style={errors.senha && { border: '1px solid #ff0000' }} />
                </div>
                <div className={styles.containerButton}>
                    <motion.button
                        type='submit'
                        animate={carregandoSession ? {
                            borderRadius: '100%',
                            width: '70px',
                            height: '70px'
                        } : {
                            borderRadius: '36px',
                            width: '100%',
                            height: '54px'
                        }}
                        whileHover={{
                            backgroundColor: 'var(--branco)',
                            border: '1px solid var(--verde-claro)',
                            color: 'var(--verde-claro)',
                        }}
                    >{carregandoSession ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                        >
                            <BiAlbum size={40} />
                        </motion.div>
                    ) : 'Entrar'}</motion.button>
                </div>
            </form>
        </section>
    )
}
