import React, { Dispatch, SetStateAction } from "react";
import styles from "./Pagination.module.css";
import { FootPlayer } from "@/Enums/FootPlayers";

interface PaginationProps {
  data: FootPlayer[][];
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, setPage, page }) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 0}
        className={styles.paginationel}
        onClick={() => setPage(page - 1)}
      >
        Precedent
      </button>
      {data.map((item: FootPlayer[], i: number) => (
        <p
          data-testid="pagination-page"
          onClick={() => setPage(i + 1)}
          className={page === i ? styles.active : styles.number}
          key={i}
        >
          {i + 1}
        </p>
      ))}
      <button
        className={styles.paginationel}
        disabled={page + 1 >= data.length}
        onClick={() => setPage(page + 1)}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
