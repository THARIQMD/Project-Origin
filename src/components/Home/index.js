import React from "react";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Lets plan your" bold="saving goal" />
      <Container />
    </div>
  );
};
