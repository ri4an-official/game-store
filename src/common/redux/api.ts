import { Game } from "./../models/Game";
import axios from "axios";

const games = axios.create({
    baseURL: "https://api.rawg.io/api/games", // если перестало работать, получи api-key
    headers: {
        "x-rapidapi-key": "37437d4ec5msh0b5b355674a5af8p1f7993jsndb1173addba0",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
});

export const getCountGames = async () =>
    (await games.get("")).data.count as number;

export const getGames = async (page: number) =>
    (await axios.get(`?page=${page}`)).data.results as Game[];

export const getGameDetails = async (name: string) =>
    (await games.get(`/${name}`)).data as Game;
export const searchGame = async (name: string) =>
    (await games.get(`?name=${name}`)).data as Game[];
