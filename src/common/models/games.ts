import { getGames } from "../redux/api"
import { combine, createEffect, createEvent, forward, restore } from "effector"
import { Game } from "./Game"

export const fxSetGames = createEffect(
    async ({ page, term }: { page: number; term?: string }) =>
        await getGames(page, term)
)
export const setGames = createEvent<{ page: number; term?: string }>()
export const $games = combine({
    games: restore<Game[]>(fxSetGames, []),
    isFetch: fxSetGames.pending,
    error: restore(fxSetGames.failData, null).reset(fxSetGames.done),
})
forward({ from: setGames, to: fxSetGames })
