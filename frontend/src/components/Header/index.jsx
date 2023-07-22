import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { TfiArrowCircleUp } from 'react-icons/tfi';

import { motion } from 'framer-motion'
import { button } from './animacao';

import styles from './styles.module.scss';

export default function Header() {
    const [abrir, setAbrir] = useState(0)
    return (
        <header className={styles.header}>
            <div className={styles.baseImg}>
                <img src={require('../../imgs/logo.jpg')} alt="logo" />
            </div>
            <nav className={styles.nav}>
                <Link className={styles.linkhome} to='/painel'>Painel</Link>
                <div className={styles.base}>
                    <button onClick={() => abrir !== 1 ? setAbrir(1) : setAbrir(0)}
                        className={styles.link}>
                        Musicos <motion.div animate={abrir === 1 ? { rotate: 180, y: -4 } : { rotate: 0 }}> <TfiArrowCircleUp size={20} /> </motion.div>
                    </button>
                    <motion.div
                        variants={button}
                        animate={abrir === 1 ? 'aberto' : 'fechado'}
                        className={styles.baseLink}
                    >
                        <Link to='/criar/musico'>Cadastrar de musico</Link>
                        <Link to='/lista/musico'>Lista de musicos</Link>
                    </motion.div>
                </div>
                <div className={styles.base}>
                    <button onClick={() => abrir !== 2 ? setAbrir(2) : setAbrir(0)}
                        className={styles.link}>
                        Louvores <motion.div animate={abrir === 2 ? { rotate: 180, y: -4 } : { rotate: 0 }}> <TfiArrowCircleUp size={20} /> </motion.div>
                    </button>
                    <motion.div
                        variants={button}
                        animate={abrir === 2 ? 'aberto' : 'fechado'}
                        className={styles.baseLink}
                    >
                        <Link to='/criar/louvor'>Cadastrar de louvor</Link>
                        <Link to='/lista/louvor'>Lista de Louvores</Link>
                    </motion.div>
                </div>
                <div className={styles.base}>
                    <button onClick={() => abrir !== 3 ? setAbrir(3) : setAbrir(0)}
                        className={styles.link}>
                        Configuração <motion.div animate={abrir === 3 ? { rotate: 180, y: -4 } : { rotate: 0 }}> <TfiArrowCircleUp size={20} /> </motion.div>
                    </button>
                    <motion.div
                        variants={button}
                        animate={abrir === 3 ? 'aberto' : 'fechado'}
                        className={styles.baseLink}
                    >
                        <Link>Usuário</Link>
                        <Link>Sair</Link>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
