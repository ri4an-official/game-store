import { Game } from "./../models/Game";
import axios from "axios";

const games = axios.create({
    baseURL: "https://api.rawg.io/api", // если перестало работать, получи api-key
});

export const getCountGames = async () =>
    (await games.get("games")).data.count as number;

export const getGames = async (page: number) => {
    let a = (await games.get(`games?page=${page}`)).data.results as Game[];
    console.log(a);
    return a;
};

export const getGameDetails = async (name: string) =>
    (await games.get(`games/${name}`)).data as Game;

export const searchGame = async (name: string) =>
    (await games.get(`games?name=${name}`)).data as Game[];
