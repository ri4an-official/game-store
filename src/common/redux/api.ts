import { Game, withPrice } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://api.rawg.io/api",
})
const key = "?key=71eb9cac6b8f41869a5fb9e17c216033"
export const getGamesCount = async (query: string = "") =>
    await games.get(`/games${key}&search=` + query).then((r) => r.data.count as number)

export const getGames = async (page: number, query: string = "") =>
    (
        await games
            .get(`/games${key}&page=${page}&page_size=21&search=${query}`)
            .then((r) => r.data.results as Game[])
    ).map(withPrice)

export const getGameDetails = async (name: string) =>
    withPrice(await games.get(`/games/${name}${key}`).then((r) => r.data as Game))
