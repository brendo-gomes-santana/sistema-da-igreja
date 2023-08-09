import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { format } from "date-fns";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import Header from "../../components/Header";
import api from "../../Service";
import Lista from "../../components/Lista";
import Loading from "../../components/Loading";
import Model from "../../components/Model";

export default function DetalheDoAgendamento() {
  const { id_agendamento, seguranca } = useParams();
  const usuario = JSON.parse(localStorage.getItem("@InforUser"));
  const navigate = useNavigate();

  const [confirmacao, setConfirmacao] = useState();
  const [descricao, setDescricao] = useState("");

  const [mostrar, setMostrar] = useState(null);

  const { data, refetch, isLoading } = useQuery("detalhe", async () => {
    return api
      .get("/detalhe/agendamento", {
        params: {
          api_key: process.env.React_App_API_KEY,
          id: id_agendamento,
        },
      })
      .then((r) => Array(r.data));
  });

  useEffect(() => {
    if (!isLoading && data) {
      setConfirmacao(data[0]?.confirmacao);
      setDescricao(data[0]?.descricao);
    }
  }, [isLoading, data]);

  const alterarInformacao = useMutation({
    mutationFn: async ({ data, horario_para_chegar, status, descricao }) => {
      return api
        .patch(
          "/atualizando/agendamento",
          {
            id: id_agendamento,
            data: data === "" ? undefined : data,
            horario_para_chegar:
              horario_para_chegar === "" ? undefined : horario_para_chegar,
            status: status === "" ? undefined : status,
            descricao: descricao === "" ? undefined : descricao,
            confirmacao: !confirmacao,
          },
          {
            params: {
              api_key: process.env.React_App_API_KEY,
              id_adm: usuario.id,
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      refetch();
    },
  });
  const confirmar = useMutation({
    mutationFn: async () => {
      return api
        .patch(
          "/atualizando/banda",
          {
            confirmacao: !confirmacao,
          },
          {
            params: {
              api_key: process.env.React_App_API_KEY,
              id_adm: usuario.id,
              id_agendamento: id_agendamento,
            },
          }
        )
        .then((r) => r.data);
    },
  });

  if (isLoading) {
    <Loading />;
  }

  return (
    <>
      <Header administrador={true} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Detalhe Do Evento</h1>
        </article>
        <article className={styles.buttonAcao}>
          <button
            onClick={() => navigate(seguranca === "adm" ? "/painel" : -1)}
          >
            Volta para Painel
          </button>
          {seguranca === "adm" && <Link to={`/atualizar/agendamento/${id_agendamento}`}>Alterar Informações</Link>}
          {data && data.length > 0 && (
            <button
              onClick={() => {
                alterarInformacao.mutate({});
                confirmar.mutate();
              }}
            >
              {data[0]?.confirmacao ? "Despublicar" : "Publicar"}
            </button>
          )}
        </article>
        {data?.map((item) => {
          return (
            <article key={item.id} className={styles.boxInfor}>
              <div id={styles.infor}>
                <p>
                  <strong>Data:</strong>
                  {format(new Date(item.data), "dd/MM/yyyy")}
                </p>
                <p>
                  <strong>Horário:</strong> {item.horario_para_chegar}h
                </p>
                <p>
                  <strong>Tipo:</strong> {item.status}
                </p>
              </div>
              <textarea value={descricao} disabled={true}></textarea>
              {seguranca === "adm" && (
                <div>
                  <h1>
                    Lista de músicos
                    {seguranca === "adm" && !confirmacao && (
                      <motion.span
                        onMouseEnter={() => setMostrar(1)}
                        onMouseLeave={() => setMostrar(null)}
                      >
                        <GoPlus />
                        {mostrar === 1 && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                           <Link to={`/criar/evento/2/${id_agendamento}`}>cadastrar mais</Link>
                          </motion.span>
                        )}
    
                      </motion.span>
                    )}
                  </h1>
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
                <h2>Lista de louvores
                {seguranca === "adm" && !confirmacao && (
                      <motion.span
                        onMouseEnter={() => setMostrar(2)}
                        onMouseLeave={() => setMostrar(null)}
                      >
                        <GoPlus />
                        {mostrar === 2 && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                           <Link to={`/criar/evento/3/${id_agendamento}`}>cadastrar mais</Link>
                          </motion.span>
                        )}
    
                      </motion.span>
                    )}
                </h2>
                {item.louvorATocar.length === 0 && (
                  <p>Não possui louvores cadastrado nesse evento</p>
                )}
                <Lista
                  data={item.louvorATocar}
                  rota="louvor"
                  adm={seguranca}
                  url="/remove/agendamento/louvor"
                  caminho={`/${seguranca}/detalhe/louvor/`}
                  atualizar={refetch}
                />
              </div>
              <Model aberto={true}/>
            </article>
          );
        })}
      </section>
    </>
  );
}
