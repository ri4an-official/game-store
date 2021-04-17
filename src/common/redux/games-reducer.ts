import { Game } from "./../models/Game"
import { createSlice } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { getGames } from "./api"
const slice = createSlice({
    name: "game-store",
    initialState: {
        games: [] as Game[],
        isFetch: true,
    },
    reducers: {
        setGames(state, { payload }: { payload: Game[] }) {
            state.games = [...payload]
        },
        setFetch(state, { payload }: { payload: boolean }) {
            state.isFetch = payload
        },
    },
})

export const setGamesAsync = (page: number, query?: string) => async (
    dispatch: Dispatch<any>
) => {
    dispatch(setFetch(true))
    dispatch(setGames(await getGames(page, query)))
    dispatch(setFetch(false))
}
export default slice.reducer
export const { setGames, setFetch } = slice.actions
