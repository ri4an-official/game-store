import { Game, withPrice } from "./../models/Game"
import axios from "axios"

const $api = axios.create({
    baseURL: "https://api.rawg.io/api",
})
const key = "71eb9cac6b8f41869a5fb9e17c216033"
export const gamesApi = {
    count: async (search: string = "") =>
        await $api
            .get("/games", { params: { search, key } })
            .then((r) => r.data.count as number),

    get: async (page: number, search: string = "") =>
        await $api
            .get("/games", { params: { key, page, search, page_size: 20 } })
            .then((r) => (r.data.results as Game[]).map(withPrice)),

    details: async (name: string) =>
        await $api
            .get(`/games/${name}`, { params: { key } })
            .then((r) => withPrice(r.data as Game)),
}
