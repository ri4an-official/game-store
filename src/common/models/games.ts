import { gamesApi } from "./api"
import { combine, createEffect, createEvent, Effect, forward, restore } from "effector"
import { Game } from "./Game"

export const fxGetGames = createEffect(
    async (params: { page?: number; search?: string } = {}) =>
        await gamesApi.get(params.page ?? 1, params.search)
)
export const setGames = createEvent<{ page?: number; search?: string }>()

export const $games = combine([
    restore<Game[]>(fxGetGames, []),
    fxGetGames.pending,
    restore(fxGetGames.failData, null).reset(fxGetGames.done),
])
forward({ from: setGames, to: fxGetGames })
