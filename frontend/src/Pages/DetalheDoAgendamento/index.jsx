import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { format } from "date-fns";

import styles from "./styles.module.scss";
import Header from "../../components/Header";
import api from "../../Service";
import Lista from "../../components/Lista";
import Loading from '../../components/Loading';

export default function DetalheDoAgendamento() {
  const { id_agendamento, seguranca } = useParams();

  const { data, refetch, isLoading } = useQuery("detalhe", async () => {
    return api
      .get("/detalhe/agendamento", {
        params: {
          api_key: "SistemaDaIgreja",
          id: id_agendamento,
        },
      })
      .then((r) => Array(r.data));
  });

  if (isLoading) {
    <Loading />
  }

  return (
    <>
      <Header administrador={true} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Detalhe Do Evento</h1>
        </article>

        {data?.map((item) => {
          return (
            <article key={item.id}>
              <p>Data: {format(new Date(item.data), "dd/MM/yyyy")}</p>
              <p>Horário: {item.horario_para_chegar}h</p>
              <p>Tipo: {item.status}</p>
              <textarea value={item.descricao}></textarea>
              {seguranca === "adm" && (
                <div>
                  <h1>Lista de músicos</h1>
                  {item.bandas.length === 0 && (
                    <p>Não possui musicos cadastrado nesse evento</p>
                  )}
                  <Lista
                    data={item.bandas}
                    rota="musico"
                    adm={seguranca}
                    url="/remove/banda"
                    atualizar={refetch}
                  />
                </div>
              )}
              <div>
                <h2>Lista de louvores</h2>
                {item.louvorATocar.length === 0 && (
                  <p>Não possui louvores cadastrado nesse evento</p>
                )}
                <Lista
                  data={item.louvorATocar}
                  rota="louvor"
                  adm={seguranca}
                  url="/remove/agendamento/louvor"
                  atualizar={refetch}
                />
              </div>
            </article>
          );
        })}
        <article>
          <Link to="/painel">Salvar rascunho</Link>
          {data && data.length > 0 && (
            <button>{data[0]?.confirmacao ? 'Despublicar' : 'Publicar'}</button>
          )}
        </article>
      </section>
    </>
  );
}
