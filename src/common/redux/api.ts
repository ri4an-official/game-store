import { Game } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://api.rawg.io/api/", // если перестало работать, получи api-key
    // headers: {
    //     // "x-rapidapi-key": "77ff5a3708d24cb0b74ec0111325ed6a",
    // },
    // headers: {
    //     "x-rapidapi-key": "77ff5a3708d24cb0b74ec0111325ed6a",
    //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    // },
})

export const getGamesCount = async (): Promise<number> =>
    (await games.get("games")).data.count

export const getGames = async (page: number): Promise<Game[]> =>
    (await games.get(`games?page=${page}`)).data.results

export const getGameDetails = async (name: string): Promise<Game> =>
    (await games.get(`games/${name}`)).data
