import React from 'react'
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
export default function NovoEvento() {
    return (
        <>
            <section className={styles.container}>
                <article className={styles.title}>
                    <Link to='/painel'>Volta</Link>
                    <h1>Novo Evento</h1>
                </article>

                <form>

                </form>
            </section>
        </>
    )
}
