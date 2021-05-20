import { Game } from "./Game"
export class User {
    constructor(name: string, password: string, sum?: number, role?: "user" | "admin") {
        this.name = name
        this.password = password
        this.role = role ?? "user"
        this.sum = sum ?? 0
        this.games = []
    }
    name: string
    password: string
    role: "user" | "admin"
    sum: number
    games: Game[]
}
