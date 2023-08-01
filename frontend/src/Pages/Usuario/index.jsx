import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import api from '../../Service';
export default function Usuario() {
    const { id } = useParams()

    const { data } = useQuery('usuario', async () => {
        return api.get('/infor/adm', {
            params: {
                api_key: 'SistemaDaIgreja',
                id_adm: id
            }
        }).then(( r ) => r.data)
    })
  return (
    <>
    <Header />
    <section className={styles.container}>
        <article className={styles.title}>
            <h1>Configuração</h1>
        </article>

        <form>
            <div>
                <label htmlFor="">Nome: </label>
                <input type="text" value={data.nome} disabled={true}/>
            </div>
        </form>
    </section>
    </>
        
  )
}
