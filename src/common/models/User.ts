import { Game } from "./Game"
export interface User {
    id: number
    name: string
    login: string
    email: string
    password: string
    role: "user" | "admin"
    sum: number
    games: Game[]
}
