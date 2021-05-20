import { gamesApi } from "../redux/api"
import { combine, createEffect, createEvent, forward, restore } from "effector"
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

// guard({
//     clock: setGames,
//     source: $games,
//     filter: (s, p) => !s[0].length || p.page !== 1,
//     target: fxGetGames,
// })
forward({ from: setGames, to: fxGetGames })
