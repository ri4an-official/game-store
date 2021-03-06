import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
import { ceil } from "lodash";
import { Dispatch } from "react";
import { getGameDetails, getGames, searchGame } from "./api";
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
                price: ceil((g.rating - 1) * 150),
            }));
            state.isFetch = false;
        },
        setFetch(state, { payload }: { payload: boolean }) {
            state.isFetch = payload;
        },
    },
});

export const setGamesOnPage = (currentPage: number) => async (
    dispatch: Dispatch<any>
) => {
    dispatch(setFetch(true));
    dispatch(setGames(await getGames(currentPage)));
};
export const selectGame = (
    setSelectedGame: (game: Game) => void,
    slug: string
) => async (dispatch: Dispatch<any>) => {
    dispatch(setFetch(true));
    setSelectedGame(await getGameDetails(slug));
    dispatch(setFetch(false));
};
export const search = (name: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setFetch(true));
    dispatch(setGames(await searchGame(name)));
    dispatch(setFetch(false));
};

export default slice.reducer;
export const { setGames, setFetch } = slice.actions;
