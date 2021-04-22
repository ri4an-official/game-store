import { createEffect, createEvent, createStore } from "effector"
import { getGames } from "../redux/api"
import { Game } from "./Game"

export const setGames = createEvent<Game[]>()
export const setGamesFx = createEffect(getGames)
export const $games = createStore<Game[]>([])
    .on(setGames, (state, games) => [...state, ...games])
    .on(setGamesFx.done, (state, { result }) => [...state, ...result])
    .on(setGamesFx.pending, (_) => toggleFetch(true) as any)
    .on(setGamesFx.fail, (_, error) => console.log(error))
    .on(setGamesFx.finally, (_) => toggleFetch(false) as any)

export const toggleFetch = createEvent<boolean>()
export const $fetch = createStore(true).on(toggleFetch, (_, fetch) => fetch)
