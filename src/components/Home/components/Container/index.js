import React from "react";
import { ContainerForm } from "./ContainerUI/ContainerForm";
import { ContainerHeader } from "./ContainerUI/ContainerHeader";
import styles from "./styles.module.css";

export const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pad}>
        <ContainerHeader />
        <ContainerForm />
      </div>
    </div>
  );
};
