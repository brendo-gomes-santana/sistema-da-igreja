import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidUser, BiAlbum } from 'react-icons/bi';


import InputSenha from '../../components/InputSenha';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function Login() {
    const [carregando, setCarregando] = useState(false)
    async function handleLogin(e){
        e.preventDefault()
        setCarregando(!carregando)
    }
    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.ContainerInput}>
                    <div>
                        <BiSolidUser />
                        <input type='email' placeholder='E-mail'/>
                    </div>
                    <InputSenha placeholder='Senha' mostrarIcon={true}/>
                </div>
                <Link href="###">Esqueceu a senha? Recuperar</Link>
                <div className={styles.containerButton}>
                    <motion.button
                    type='submit'
                    animate={carregando ? {
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
                    >{carregando ? ( 
                    <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    >
                        <BiAlbum size={40}/>
                    </motion.div> 
                    ): 'Entrar'}</motion.button>
                </div>
            </form>
        </section>
    )
}
