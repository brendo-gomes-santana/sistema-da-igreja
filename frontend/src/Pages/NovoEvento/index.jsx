import React, { useState } from 'react';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import { status } from '../../Data';
import api from '../../Service';

export default function NovoEvento() {
    const navigate = useNavigate();
    const adm = JSON.parse(localStorage.getItem('@InforUser'))

    registerLocale('pt-BR', ptBR);
    setDefaultLocale('pt-BR');

    const [data, setData] = useState(new Date());
    const [horario, setHorario] = useState('')
    const [selecao, setSelecao] = useState('')
    const [descricao, setDescricao] = useState('')

    const cadastrar = useMutation({
        mutationFn: async ({ data, horario, selecao, descricao }) => {
            return api.post('/create/agendamento', {
                data,
                horario_para_chegar: horario,
                status: selecao,
                descricao
            }, {
                params: {
                    id_adm: adm.id,
                    api_key: 'SistemaDaIgreja'
                }
            }).then((r) => r.data)
        },
        onSuccess: (data) => {
            navigate(`/criar/evento/2/${data.id}`)
        }
    })

    function handleCadastrarEvento(e) {
        e.preventDefault()
        if(!horario || !data || !status){
            alert('Preencha os campos')
            return;
        }

        cadastrar.mutate({
            data: data,
            horario: horario,
            selecao: selecao,
            descricao: descricao
        })

    }
    return (
        <>
            <Header administrador={true} />
            <section className={styles.container}>
                <article className={styles.title}>
                    <Link to='/painel'>Volta</Link>
                    <h1>Novo Evento</h1>
                </article>

                <form onSubmit={handleCadastrarEvento} className={styles.form}>
                    <div className={styles.data_horario_select} >
                        <label>Data do evento.:</label>
                        <DatePicker
                            selected={data}
                            onChange={(date) => setData(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            locale="pt-BR"
                        />
                    </div>
                    <div className={styles.data_horario_select}>
                        <label>Horário.............:</label>
                        <IMaskInput type="text" mask='00:00' placeholder='00:00h' 
                        value={horario} onChange={ v => setHorario(v.target.value)}/>
                    </div>
                    <div className={styles.data_horario_select}>
                        <label>Status................:</label>
                        <select value={selecao} onChange={ v => setSelecao(v.target.value)}>
                            <option>Selecione</option>
                            {status.map((i) => {
                                return (
                                    <option key={i.id} value={i.s}>{i.s}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={styles.label_textarea}>
                        <label>Descrição</label>
                        <textarea placeholder='Não obrigatório' 
                        value={descricao} onChange={ v => setDescricao(v.target.value)}/>
                    </div>
                    <button id={styles.button} type='submit'>{cadastrar.isLoading ? 'Carregando...' : 'Proximo'}</button>
                </form>
            </section>
        </>
    )
}
