import { Game, withPrice } from "./../models/Game"
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

export const getGamesCount = async (query: string = "") =>
    (await games.get(`games${query && "?search=" + query}`)).data
        .count as number

export const getGames = async (page: number, query: string = "") =>
    ((await games.get(`games?page=${page + (query && `&search=${query}`)}`))
        .data.results as Game[]).map(withPrice)

export const getGameDetails = async (name: string) =>
    withPrice((await games.get(`games/${name}`)).data as Game)
