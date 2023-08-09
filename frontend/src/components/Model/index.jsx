import React from "react";

import styles from "./styles.module.scss";

export default function Model({ aberto, data }) {
  return (
    aberto && (
      <div className={styles.BaseModel}>
        <div className={styles.model}>
          <p>Teste</p>
        </div>
      </div>
    )
  );
}
