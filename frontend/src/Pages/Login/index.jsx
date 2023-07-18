import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import { BiSolidUser, BiAlbum } from 'react-icons/bi';


import InputSenha from '../../components/InputSenha';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function Login() {

    const { Login, carregandoSession } = useContext(AuthContext)
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleLogin(e){
        e.preventDefault()

        if(!email || !senha){
            alert('Preenchar os campos')
            return;
        }
        Login.mutate({email:email, senha:senha})
    }
    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.ContainerInput}>
                    <div>
                        <BiSolidUser />
                        <input type='email' placeholder='E-mail'
                        value={email} onChange={ v => setEmail(v.target.value) }/>
                    </div>
                    <InputSenha placeholder='Senha' mostrarIcon={true} 
                    value={senha} onChange={ v => setSenha(v.target.value) }/>
                </div>
                <Link href="###">Esqueceu a senha? Recuperar</Link>
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
                        <BiAlbum size={40}/>
                    </motion.div> 
                    ): 'Entrar'}</motion.button>
                </div>
            </form>
        </section>
    )
}
