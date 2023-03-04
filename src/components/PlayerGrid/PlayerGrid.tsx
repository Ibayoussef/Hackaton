import React from "react";
import { PlayerGridProps } from "@/Enums/Props";
import styles from "./PlayerGrid.module.css";
import { GridItem } from "../";
const PlayerGrid: React.FC<PlayerGridProps> = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data && data.map((item) => <GridItem key={item.id} item={item} />)}
    </div>
  );
};

export default PlayerGrid;
