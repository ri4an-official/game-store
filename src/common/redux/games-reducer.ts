import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "gamesStore",
    initialState: {
        games: [] as Game[],
        isFetch: true,
    },
    reducers: {
        setGames(state, { payload }) {
            state.games = [...payload];
            state.isFetch = false;
        },
        setFetch(state, { payload }) {
            state.isFetch = payload;
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
export const { add, remove, setGames, setFetch } = slice.actions;
