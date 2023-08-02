import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';

import { PiUsersThreeFill } from 'react-icons/pi';
import { BsCalendar2Check } from 'react-icons/bs';
import { MdOutlineLibraryMusic } from 'react-icons/md';

import { FaEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';

import { format } from 'date-fns';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import api from '../../Service';
import Loading from '../../components/Loading';

export default function Painel() {
  const adm = JSON.parse(localStorage.getItem('@InforUser'))
  const navigate = useNavigate();

  //pegando a lista de agendamento
  const { data, isLoading, refetch } = useQuery('agendar', async () => {
    return api.get('/lista/agendamento', {
      params: {
        id_adm: adm.id,
        api_key: 'SistemaDaIgreja'
      }
    }).then((r) => r.data)
  })
  const { data:musicos } = useQuery('musicos', async () => {
    return api.get('/lista/musico', {
      params: {
        id_adm: adm.id,
        api_key: 'SistemaDaIgreja'
      }
    }).then((r) => r.data)
  })

  const { data:louvoures } = useQuery('louvores', async () => {
    return api.get('/lista/louvor', {
      params: {
        id_adm: adm.id,
        api_key: 'SistemaDaIgreja'
      }
    }).then((r) => r.data)
  })

  const deleteAgendamento = useMutation({
    mutationFn: ({id}) => {
      return api.delete('/remove/agendamento', {
        params: {
          id_adm: adm.id,
          api_key: 'SistemaDaIgreja',
          id
        }
      }).then((r) => r.data)
    },
    onSuccess: () => {
      refetch()
    }
  })

  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  }
  if(isLoading){
    return(
      <Loading/>
    )
  }
  return (
    <>
      <Header administrador={true}/>
      <section className={styles.container}>

        <article className={styles.title}>
          <h1>Painel</h1>
        </article>

        <article className={styles.baseInformacao}>
          <div>
            <PiUsersThreeFill size={115} />
            <span>{musicos?.length}</span>
            <p>Q. de Músicos Cadastrados</p>
          </div>
          <div>
            <BsCalendar2Check size={105} />
            <span>{data?.filter(i => i.confirmacao === true).length}</span>
            <p>Q. de Eventos Agendado</p>
          </div>
          <div>
            <MdOutlineLibraryMusic size={115} />
            <span>{louvoures?.length}</span>
            <p>Q. de Louvores Cadastrados</p>
          </div>
        </article>

        <article className={styles.ContainerCriarAgendamento}>
          <h2>Agendamento</h2>
          <Link to='/criar/evento'>Cadastrar Evento</Link>
        </article>

        <article className={styles.continerAgendamento}>
          {isLoading && (
            <p>Carregando Informação</p>
          )}
          {data?.map((agendar) => {
            return (
              <div className={styles.boxAgendamento} key={agendar.id}>
                <span style={{
                  backgroundColor: agendar.confirmacao ? 'var(--verde-claro)' : 'var(--vermelho-claro)'
                }} >{agendar.confirmacao ? 'Ativo' : 'Pendente'}</span>
                <p>{agendar.status}</p>
                <p> {formatDate(agendar.data)}</p>
                <p>{agendar.horario_para_chegar}h</p>
                <div className={styles.boxIcon}>
                  <FaEye onClick={ () => navigate(`/detalhe/agendamento/${agendar.id}`) }/>
                  <BiSolidMessageSquareEdit />
                  <AiFillDelete onClick={ () => deleteAgendamento.mutate({id: agendar.id}) }/>
                </div>
              </div>
            )
          })}

        </article>
      </section>
    </>

  )
}
