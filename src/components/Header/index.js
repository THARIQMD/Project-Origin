import React from "react";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/asset/logo/logo.png" />
    </div>
  );
};
