import React from "react";
import styles from "./styles.module.css";

export const Title = ({ title, bold }) => {
  return (
    <div className={styles.title}>
      <p>
        {title} <span>{bold}</span>
      </p>
    </div>
  );
};
