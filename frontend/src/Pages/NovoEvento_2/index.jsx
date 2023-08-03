import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Header from "../../components/Header";
import styles from "./styles.module.scss";
import api from "../../Service";

export default function NovoEvento2() {

  const usuario = JSON.parse(localStorage.getItem("@InforUser"));
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");


  return (
    <>
      <Header administrador={true} />
      <section className={styles.container}>
        <article className={styles.title}>
          <h1>Novo Evento</h1>
        </article>

        <form>
          <label>Selecione os músicos: </label>
          <select value={tipo} onChange={(v) => setTipo(v.target.value)}>
            <option value=""></option>
            <option value="On Fire">On Fire</option>
            <option value="Geral">Geral</option>
          </select>

          <select>
            <option></option>
          </select>
        </form>
      </section>
    </>
  );
}
