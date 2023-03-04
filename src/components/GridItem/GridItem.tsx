import React from "react";
import styles from "./GridItem.module.css";
import { GridItemProps } from "@/Enums/Props";
import { formatNumber } from "../../hooks/formatNumber";
const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <div data-testid="grid-item" className={styles.item}>
      <div className={styles.imgcontainer}>
        <img src={item.pictureURl} alt="player_pic" />
      </div>
      <div className={styles.infocontainer}>
        <h4 className={(styles.typography, styles.name)}>
          {item.firstname + " " + item.lastname}
        </h4>
        <div className={styles.achievements}>
          <h4 className={styles.typography}>But: {item.goal}</h4>
          <h4 className={styles.typography}>
            Salary: {formatNumber(item.salary) + " " + item.devise}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
