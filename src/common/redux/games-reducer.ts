import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    games: [] as Game[],
};
export type Games = typeof initialState;
const slice = createSlice({
    name: "gamesStore",
    initialState,
    reducers: {
        setGames(state, { payload }) {
            state.games = [...payload];
        },
        add(state, { payload }) {
            state.games.push(payload);
        },
        remove(state, action) {
            // state.games.pop(action.payload);
        },
    },
});

export default slice.reducer;
export const { add, remove, setGames } = slice.actions;
