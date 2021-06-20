import { Game, withPrice } from "./Game"
import axios from "axios"
import { User } from "./User"

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

const $usersdb = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    responseType: "json",
    headers: {
        "API-KEY": "8b6db175-dcb8-4dbb-9055-5aa4c87d64d3",
    },
})
export const users = {
    me: async () => (await $usersdb.get("/auth/me")).data.data as User,
    get: async () => (await $usersdb.get("/users")).data.items as User[],
    login: async (email: string, password: string) =>
        await $usersdb.post("/auth/login", { email, password }),
}
