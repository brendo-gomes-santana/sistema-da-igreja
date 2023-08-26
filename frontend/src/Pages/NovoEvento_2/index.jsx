import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import { tipos } from "../../Data";
import { AiFillDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

import Header from "../../components/Header";
import styles from "./styles.module.scss";
import api from "../../Service";

export default function NovoEvento2() {
  const usuario = JSON.parse(localStorage.getItem("@InforUser"));
  const { id_agendamento } = useParams();

  const [nomes, setNomes] = useState([]);
  const [tipo, setTipo] = useState("");
  const [id, setId] = useState("");
  const [loadingPorid, setLoadingPorId] = useState('')
  useEffect(() => {
    (async () => {
      await api
        .post(
          "/lista/musico",
          {
            tipo,
          },
          {
            params: {
              api_key: process.env.React_App_API_KEY,
              id_adm: usuario.id,
            },
          }
        )
        .then((r) => setNomes(r.data));
    })();
  }, [usuario, tipo]);

  const handleCadastrarMusico = useMutation({
    mutationFn: async ({ id }) => {
      return api
        .post(
          "/create/banda",
          {},
          {
            params: {
              api_key: process.env.React_App_API_KEY,
              id_adm: usuario.id,
              id_musico: id,
              id_agendamento: id_agendamento,
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const { data, refetch } = useQuery("banda", async () => {
    return api
      .get("/lista/banda", {
        params: {
          api_key: process.env.React_App_API_KEY,
          id_agendamento: id_agendamento,
          id_adm: usuario.id,
        },
      })
      .then((r) => r.data);
  });

  const handleDeletaBanda = useMutation({
    mutationFn: async ({ id }) => {
      return api
        .delete("/remove/banda", {
          params: {
            api_key: process.env.React_App_API_KEY,
            id_adm: usuario.id,
            id: id,
          },
        })
        .then((r) => r.data);
    },
    onSuccess: () => {
      refetch();
    },
  });
  return (
    <>
      <Header administrador={true} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Novo Evento</h1>
        </article>

        <form className={styles.form}>
          <label>Selecione os músicos: </label>
          <select
            value={tipo}
            onChange={(v) => setTipo(v.target.value)}
            disabled={handleCadastrarMusico.isLoading}
          >
            <option value=""></option>
            {tipos.map((i) => {
              return(
                <option key={i.id} value={i.t}>{i.t}</option>
              )
            })}
          </select>

          <select
            value={id}
            onChange={(v) => setId(v.target.value)}
            disabled={handleCadastrarMusico.isLoading}
          >
            <option>
              {nomes.length === 0 ? "Não possui músico" : "Selecione o musico"}
            </option>
            {nomes?.map((n) => (
              <option key={n.id} value={n.id}>
                {n.nome}
              </option>
            ))}
          </select>

          <button
            disabled={handleCadastrarMusico.isLoading}
            onClick={(e) => {
              e.preventDefault();
              handleCadastrarMusico.mutate({ id: id });
            }}
          >
            {handleCadastrarMusico.isLoading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>

        <article className={styles.baseDaListaBanda}>
          <Link to={`/criar/evento/3/${id_agendamento}`}>Proximo</Link>
          {data?.length === 0 && (
            <p>Não é obrigatório selecionar os musicos agora.</p>
          )}
          {data?.map((banda) => {
            return (
              <div className={styles.boxBanda}>
                <p>{banda.musico.nome}</p>
                {banda.id === loadingPorid ? (
                  <motion.div
                  initial={{rotate: 0}}
                  animate={{ rotate: 360}}
                  transition={{ repeat: Infinity, ease: "linear" }}
                  >
                    <AiOutlineLoading3Quarters />
                  </motion.div>
                ) : (
                  <button
                    onClick={() => {
                      handleDeletaBanda.mutate({ id: banda.id })
                      setLoadingPorId(banda.id)
                  }}
                  >
                    <AiFillDelete />
                  </button>
                )}
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
}
