import { Game } from "./Game";
export type User = {
    name: string;
    password: string;
    sum: number;
    games: Game[];
};
