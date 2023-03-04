import { FootPlayer } from "@/Enums/FootPlayers";

export const usePaginate = (players: FootPlayer[]): FootPlayer[][] => {
  const pages: FootPlayer[][] = [];
  const pageCount = Math.ceil(players.length / 6);

  for (let i = 0; i < pageCount; i++) {
    const startIndex = i * 6;
    const page = players.slice(startIndex, startIndex + 6);
    pages.push(page);
  }

  return pages;
};
