import React from "react";
import { ContainerProps } from "@/Enums/Props";
import styles from "./Container.module.css";
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div data-testid="container" className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
