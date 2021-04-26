import { getGames } from "../redux/api"
import { combine, createEffect, restore } from "effector"
import { Game } from "./Game"

export const setGamesFx = createEffect(
    async ({ page, term }: { page: number; term?: string }) =>
        await getGames(page, term)
)
export const $gamesStore = combine({
    games: restore<Game[]>(setGamesFx, []),
    isFetch: setGamesFx.pending,
    error: restore(setGamesFx.failData, null).reset(setGamesFx.done),
})
