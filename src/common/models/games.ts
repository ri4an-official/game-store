import { gamesApi } from "../redux/api"
import { createEffect, createEvent, forward, restore } from "effector"
import { Game } from "./Game"

export const fxGetGames = createEffect(
    async ({ page, search }: { page: number; search?: string }) =>
        await gamesApi.get(page, search)
)
export const fxGetGameDetails = createEffect(
    async (title: string) => await gamesApi.details(title)
)

export const setGames = createEvent<{ page: number; search?: string }>()
export const setGameDetails = createEvent<string>()

export const $games = restore<Game[]>(fxGetGames, [])
export const $selectedGame = restore<Game>(fxGetGameDetails, {} as Game)
export const $isFetch = fxGetGames.pending || fxGetGameDetails.pending
export const $error = restore(fxGetGames.failData, null).reset(fxGetGames.done)

forward({ from: setGames, to: fxGetGames })
forward({ from: setGameDetails, to: fxGetGameDetails })
