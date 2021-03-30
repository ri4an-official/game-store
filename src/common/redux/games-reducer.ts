import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
import { ceil } from "lodash";
import { Dispatch } from "react";
import { getGames } from "./api";
const slice = createSlice({
    name: "game-store",
    initialState: {
        games: [] as Game[],
        isFetch: true,
    },
    reducers: {
        setGames(state, { payload }: { payload: Game[] }) {
            state.games = payload.map((g) => ({
                ...g,
                price: ceil((g.rating + 1) * 80),
            }));
        },
        setFetch(state, { payload }: { payload: boolean }) {
            state.isFetch = payload;
        },
    },
});

export const setGamesAsync = (currentPage: number) => async (
    dispatch: Dispatch<any>
) => {
    dispatch(setFetch(true));
    dispatch(setGames(await getGames(currentPage)));
    dispatch(setFetch(false));
};
export default slice.reducer;
export const { setGames, setFetch } = slice.actions;
