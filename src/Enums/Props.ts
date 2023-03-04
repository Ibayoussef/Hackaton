import { ReactNode } from "react";
import { FootPlayer } from "./FootPlayers";

export interface HomeProps {
  data: FootPlayer[];
}

export interface ContainerProps {
  children: ReactNode;
}

export interface PlayerGridProps extends HomeProps {}

export interface GridItemProps {
  item: FootPlayer;
}
