import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../../components/Header";
import styles from "./styles.module.scss";
import api from "../../Service";
import Loading from "../../components/Loading";
export default function Usuario() {
  const { seguranca, id } = useParams();
  const [alterar, setAlterar] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [novaSenha, setNovaSenha] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const { data, isLoading, refetch } = useQuery("usuario", async () => {
    return api
      .get("/infor/adm", {
        params: {
          api_key: process.env.React_App_API_KEY,
          id_adm: id,
        },
      })
      .then((r) => r.data);
  });
  const AlterarSenha = useMutation({
    mutationFn: async ({ senha }) => {
      return api
        .patch(
          seguranca === "adm" ? "/update/adm" : "/update/musico",
          {
            id: id,
            senha: senha,
          },
          {
            params: {
              api_key: process.env.React_App_API_KEY,
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      setSenha("");
      setConfirmarSenha("");
      setNovaSenha(false);
    },
  });

  const AlterarNomeEEmail = useMutation({
    mutationFn: async ({ nome, email }) => {
      return api
        .patch(
          seguranca === "adm" ? "/update/adm" : "/update/musico",
          {
            id: id,
            nome: nome !== "" ? nome : undefined,
            email: email !== "" ? email : undefined,
          },
          {
            params: {
              api_key: process.env.React_App_API_KEY,
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      setAlterar(false);
      setNome("");
      setEmail("");
      refetch();
    },
  });

  async function alterarInformacao(e) {
    e.preventDefault();

    if (senha || confirmarSenha) {
      if (senha === confirmarSenha) {
        return AlterarSenha.mutate({ senha: senha });
      } else {
        return alert("As Senhas não batem");
      }
    } else {
      return AlterarNomeEEmail.mutate({ nome: nome, email: email });
    }
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header administrador={seguranca === "adm" ? true : false} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Configuração</h1>
        </article>
        <form onSubmit={alterarInformacao} className={styles.formNomeEEmail}>
          <div className={styles.baseInput}>
            <label htmlFor="">Nome: </label>
            <input
              type="text"
              placeholder={data?.nome}
              value={nome}
              onChange={(v) => setNome(v.target.value)}
              disabled={!alterar}
            />
          </div>
          <div className={styles.baseInput}>
            <label htmlFor="">Email: </label>
            <input
              type="email"
              placeholder={data?.email}
              value={email}
              onChange={(v) => setEmail(v.target.value)}
              disabled={!alterar}
            />
          </div>

          {alterar && (
            <div className={styles.baseButton}>
              <button
                type="submit"
                style={{ backgroundColor: "var(--verde-claro)" }}
              >
                Salvar
              </button>
              <span
                onClick={() => setAlterar(false)}
                style={{ backgroundColor: "var(--vermelho-claro)" }}
              >
                Cancela
              </span>
            </div>
          )}
        </form>
        {!alterar && (
          <button
            onClick={() => setAlterar(true)}
            className={styles.alterarSenhaEInformacaoButton}
          >
            Alterar Informação
          </button>
        )}
        <button
          onClick={() => setNovaSenha(true)}
          className={styles.alterarSenhaEInformacaoButton}
        >
          Alterar Senha
        </button>

        <motion.article
          initial={{ y: -1000 }}
          animate={
            novaSenha
              ? {
                  y: 0,
                }
              : { y: -1000 }
          }
          className={styles.baseModel}
        >
          <form className={styles.boxModel} onSubmit={alterarInformacao}>
            <input
              type="password"
              placeholder="Digite a nova senha"
              value={senha}
              onChange={(v) => setSenha(v.target.value)}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirmarSenha}
              onChange={(v) => setConfirmarSenha(v.target.value)}
            />
            <div className={styles.baseButtonNovaSenha}>
              <button
                type="submit"
                style={{ backgroundColor: "var(--verde-claro)" }}
              >
                {AlterarSenha.isLoading ? "carregando..." : "Salvar"}
              </button>
              <span
                style={{ backgroundColor: "var(--vermelho-claro)" }}
                onClick={() => setNovaSenha(false)}
              >
                Cancelar
              </span>
            </div>
          </form>
        </motion.article>
      </section>
    </>
  );
}
