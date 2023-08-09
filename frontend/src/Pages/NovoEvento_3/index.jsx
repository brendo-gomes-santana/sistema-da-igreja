import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { AiOutlineLoading3Quarters, AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import Header from "../../components/Header";
import api from "../../Service";

export default function NovoEvento3() {
  const { id_agendamento } = useParams();
  const usuario = JSON.parse(localStorage.getItem("@InforUser"));
  const [idLouvor, setIdLouvor] = useState("");
  const [loading, setLoading] = useState("");

  const { data: louvores } = useQuery("louvores", async () => {
    return api
      .get("/lista/louvor", {
        params: {
          api_key: process.env.React_App_API_KEY,
          id_adm: usuario.id,
        },
      })
      .then((r) => r.data);
  });
  const { data: louvoresATocar, refetch } = useQuery(
    "louvoresAAtocar",
    async () => {
      return api
        .get("/lista/agendamento/louvor", {
          params: {
            api_key: process.env.React_App_API_KEY,
            id_adm: usuario.id,
            id_agendamento: id_agendamento,
          },
        })
        .then((r) => r.data);
    }
  );

  const handleCadastrarLouvoresATocar = useMutation({
    mutationFn: async ({ louvor }) => {
      return api
        .post(
          "/create/agendamento/louvor",
          {},
          {
            params: {
              api_key: process.env.React_App_API_KEY,
              id_adm: usuario.id,
              id_agendamento: id_agendamento,
              id_louvor: louvor,
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteLouvorAAtocar = useMutation({
    mutationFn: async ({ id }) => {
      return api
        .delete("/remove/agendamento/louvor", {
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
          <label>Selecione os louvores: </label>
          <select
            disabled={handleCadastrarLouvoresATocar.isLoading}
            value={idLouvor}
            onChange={(v) => setIdLouvor(v.target.value)}
          >
            <option value="">
              {louvores?.length === 0 ? "Não possui louvor" : "Selecione"}
            </option>
            {louvores?.map((louvor) => {
              return (
                <option key={louvor.id} value={louvor.id}>
                  {louvor.nome}
                </option>
              );
            })}
          </select>
          <button
            disabled={handleCadastrarLouvoresATocar.isLoading}
            onClick={(e) => {
              e.preventDefault();
              handleCadastrarLouvoresATocar.mutate({ louvor: idLouvor });
            }}
          >
            {handleCadastrarLouvoresATocar.isLoading
              ? "Carregando..."
              : "Cadastrar"}
          </button>
        </form>

        <article className={styles.lista}>
          <Link to={`/adm/detalhe/agendamento/${id_agendamento}`}>Proximo</Link>
          {louvoresATocar?.length === 0 && (
            <p>Não é obrigatório selecionar os louvores agora.</p>
          )}
          {louvoresATocar?.map((louvor) => {
            return (
              <div className={styles.box}>
                <p>{louvor.louvor.nome}</p>
                {louvor.id === loading ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear" }}
                  >
                    <AiOutlineLoading3Quarters />
                  </motion.div>
                ) : (
                  <button
                    onClick={() => {
                      setLoading(louvor.id);
                      handleDeleteLouvorAAtocar.mutate({ id: louvor.id });
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
