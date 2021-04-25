import { Game, withPrice } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://rawg-video-games-database.p.rapidapi.com/", // если перестало работать, получи api-key
    headers: {
        "x-rapidapi-key": "7251919998mshea47033544f2955p144694jsn19f43e3ca524",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
})

export const getGamesCount = async (query: string = "") =>
    (await games.get(`games${query && "?search=" + query}`)).data.count as number

export const getGames = async (page: number, query: string = "") =>
    ((await games.get(`games?page=${page + (query && `&search=${query}`)}`)).data
        .results as Game[]).map(withPrice)

export const getGameDetails = async (name: string) =>
    withPrice((await games.get(`games/${name}`)).data as Game)
