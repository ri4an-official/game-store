import { Game, withPrice } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://rawg.io/api/", // если перестало работать, получи api-key
    headers: {
        "Content-Type": "application/json",
        key: "71eb9cac6b8f41869a5fb9e17c216033",
    },
})

export const getGamesCount = async (query: string = "") =>
    (await games.get(`/games${query && "?search=" + query}`)).data.count as number

export const getGames = async (page: number, query: string = "") =>
    ((await games.get(`/games?page=${page + (query && `&search=${query}`)}`)).data
        .results as Game[]).map(withPrice)

export const getGameDetails = async (name: string) =>
    withPrice((await games.get(`/games/${name}`)).data as Game)
