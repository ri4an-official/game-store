import { Game } from "./../models/Game"
import axios from "axios"

const games = axios.create({
    baseURL: "https://rawg-video-games-database.p.rapidapi.com", // если перестало работать, получи api-key
    headers: {
        "rapidapi-key": "7251919998mshea47033544f2955p144694jsn19f43e3ca524",
        "Content-Type": "application/json",
        key: "71eb9cac6b8f41869a5fb9e17c216033",
    },
})

export const getGamesCount = async (query: string = "") =>
    await games
        .get(`/games${query && "?search=" + query}`)
        .then((r) => r.data.count as number)

export const getGames = async (page: number, query: string = "") =>
    await games
        .get(`/games?page=${page + (query && `&search=${query}`)}`)
        .then((r) => (r.data.results as Game[]).map((g) => g.withPrice()))

export const getGameDetails = async (name: string) =>
    await games.get(`/games/${name}`).then((r) => (r.data as Game).withPrice())
