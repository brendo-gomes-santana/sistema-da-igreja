import React, { useState } from "react";
import { AiFillDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import api from "../../Service";
import styles from './styles.module.scss';

export default function Lista({ data, url, adm, rota, atualizar, caminho }) {
    
  const usuario = JSON.parse(localStorage.getItem("@InforUser"));
  const [loading, setLoading] = useState("");

  const handleDeletaItem = useMutation({
    mutationFn: async ({ id }) => {
      return api
        .delete(url, {
          params: {
            api_key: "SistemaDaIgreja",
            id_adm: usuario.id,
            id: id,
          },
        })
        .then((r) => r.data);
    },
    onSuccess: () => {
      atualizar();
    },
  });

  return data.map((i) => {
    return (
      <div key={i.id} className={styles.box}>
        {caminho === undefined ? (
          <p>{i[rota].nome}</p>
        ) : (
          <Link to={caminho + i[rota].id}>{i[rota].nome}</Link>
        )}
        
        {adm === "adm" &&
          (i.id === loading ? (
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
                handleDeletaItem.mutate({ id: i.id });
                setLoading(i.id);
              }}
            >
              <AiFillDelete />
            </button>
          ))}
      </div>
    );
  });
}
