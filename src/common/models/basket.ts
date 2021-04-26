import { combine, createEffect, createEvent, createStore } from "effector"
import { Game } from "./Game"

export const addGame = createEvent<Game>()
export const deleteGame = createEvent<number>()
export const buyGames = createEffect((games: Game[]) => {})
export const dropGames = createEvent()
export const $basket = combine({
    games: createStore<Game[]>([])
        .on(addGame, (state, game) => [...state, game])
        .on(deleteGame, (state, id) => state.filter((g) => g.id !== id))
        .reset(dropGames),
})
