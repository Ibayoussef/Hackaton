import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./Searchbar.module.css";
import { FootPlayer } from "../..//Enums/FootPlayers";
import { usePaginate } from "../../hooks/usePaginate";
interface SearchbarProps {
  setDisplayedData: Dispatch<SetStateAction<FootPlayer[][]>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  data: FootPlayer[];
}

const Searchbar: React.FC<SearchbarProps> = ({
  setDisplayedData,
  data,
  setSearchValue,
}) => {
  const handleSearch = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    const searchResult = data.filter((item) => {
      const fullName = `${item.firstname} ${item.lastname}`;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const paginatedData = usePaginate(searchResult);
    setSearchValue(value);
    setDisplayedData(paginatedData);
  };
  return (
    <input
      className={styles.searchbar}
      type="text"
      onChange={(e: ChangeEvent) => handleSearch(e)}
      placeholder="Recherchez un joueur içi..."
    />
  );
};

export default Searchbar;
