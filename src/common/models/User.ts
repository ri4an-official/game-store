import { Game } from "./Game"
export type User = {
    name: string
    password: string
    role: "user" | "admin"
    sum: number
    games: Game[]
}
