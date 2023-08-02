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

  const [novaSenha, setNovaSenha] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const { data, isLoading } = useQuery("usuario", async () => {
    return api
      .get("/infor/adm", {
        params: {
          api_key: "SistemaDaIgreja",
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
              api_key: "SistemaDaIgreja",
            },
          }
        )
        .then((r) => r.data);
    },
    onSuccess: () => {
      setSenha('')
      setConfirmarSenha('')
      setNovaSenha(false)

    },
  });
  async function alterarInformacao(e) {
    e.preventDefault();

    if (senha || confirmarSenha) {
      if (senha === confirmarSenha) {
        AlterarSenha.mutate({ senha: senha });
      } else {
        alert("As Senhas não batem");
      }
    }
  }
  if(isLoading){
    return(
        <Loading/>
    )
  };
  return (
    <>
      <Header administrador={seguranca === "adm" ? true : false} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Configuração</h1>
        </article>

        {!alterar && (
          <button onClick={() => setAlterar(true)}>Alterar Informação</button>
        )}
        <form>
          <div className={styles.baseInput}>
            <label htmlFor="">Nome: </label>
            <input type="text" value={data?.nome} disabled={!alterar} />
          </div>
          <div className={styles.baseInput}>
            <label htmlFor="">Email: </label>
            <input type="email" value={data?.email} disabled={!alterar} />
          </div>

          {alterar && (
            <div className={styles.baseButton}>
              <span onClick={() => setAlterar(false)}>Cancela</span>
              <button type="submit">Salvar</button>
            </div>
          )}
        </form>

        <button onClick={() => setNovaSenha(true)}>Alterar Senha</button>

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
               {AlterarSenha.isLoading ? 'carregando...' : 'Salvar'} 
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
