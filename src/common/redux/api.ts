import { Game } from "./../models/Game";
import axios from "axios";

const games = axios.create({
    baseURL: "https://api.rawg.io/api/", // если перестало работать, получи api-key
    // headers: {
    //     // "x-rapidapi-key": "77ff5a3708d24cb0b74ec0111325ed6a",
    // },
    // headers: {
    //     "x-rapidapi-key": "77ff5a3708d24cb0b74ec0111325ed6a",
    //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    // },
});

export const getCountGames = async () =>
    (await games.get("games")).data.count as number;

export const getGames = async (page: number) =>
    (await games.get(`games?page=${page}`)).data.results as Game[];

export const getGameDetails = async (name: string) =>
    (await games.get(`games/${name}`)).data as Game;

export const searchGame = async (name: string) =>
    (await games.get(`games?name=${name}`)).data as Game[];
