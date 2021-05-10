import { Game, withPrice } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://api.rawg.io/api",
})
const key = "71eb9cac6b8f41869a5fb9e17c216033"
export const getGamesCount = async (search: string = "") =>
    await games
        .get("/games", { params: { search, key } })
        .then((r) => r.data.count as number)

export const getGames = async (page: number, search: string = "") =>
    await games
        .get("/games", { params: { key, page, search, page_size: 20 } })
        .then((r) => (r.data.results as Game[]).map(withPrice))

export const getGameDetails = async (name: string) =>
    await games
        .get(`/games/${name}`, { params: { key } })
        .then((r) => withPrice(r.data as Game))
