import React from "react";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.Container}>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className={styles.base}
      >
        <VscLoading />
      </motion.div>
    </div>
  );
}
