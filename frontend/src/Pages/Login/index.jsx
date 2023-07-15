import React from 'react'
import InputSenha from '../../components/InputSenha';
import { BiSolidUser } from 'react-icons/bi';
import styles from './style.module.scss';

export default function Login() {
    return (
        <section className={styles.container}>
            <form className={styles.form}>
                <div className={styles.baseInput}>
                    <div>
                        <BiSolidUser />
                        <input type='email' />
                    </div>
                    <InputSenha />
                </div>
                <a href="###">Esqueceu a senha? Recupere</a>
                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </section>
    )
}
