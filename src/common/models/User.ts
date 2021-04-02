import { Game } from "./Game";
export interface User {
    name: string;
    password: string;
    role: "user" | "admin";
    sum: number;
    games: Game[];
};
