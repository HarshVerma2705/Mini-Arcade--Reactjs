import { FaTh } from "react-icons/fa";
import { GiBrain, GiSnake } from "react-icons/gi";

export const games = [
  {
    id: "snake",
    title: "Snake",
    icon: GiSnake,
    route: "/snake",
    status: "live",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    icon: FaTh,
    route: "/tic-tac-toe",
    status: "coming-soon",
  },
  {
    id: "memory",
    title: "Memory Game",
    icon: GiBrain,
    route: "/memory",
    status: "coming-soon",
  },
];
