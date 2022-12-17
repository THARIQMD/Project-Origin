import React from "react";
import styles from "./styles.module.css";

export const ContainerHeader = () => {
  return (
    <div className={styles.flex}>
      <img src="/asset/icon/Icon.svg" />
      <div className={styles.containerTitle}>
        <h1>Buy a house</h1>
        <p>saving goal</p>
      </div>
    </div>
  );
};
