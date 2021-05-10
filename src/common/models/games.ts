import { getGames } from "../redux/api"
import { combine, createEffect, createEvent, forward, restore } from "effector"
import { Game } from "./Game"

export const fxSetGames = createEffect(
    async ({ page, search }: { page: number; search?: string }) =>
        await getGames(page, search)
)
export const setGames = createEvent<{ page: number; search?: string }>()
export const $games = restore<Game[]>(fxSetGames, [])
export const $isFetch = fxSetGames.pending
export const $error = restore(fxSetGames.failData, null).reset(fxSetGames.done)
forward({ from: setGames, to: fxSetGames })
