import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "game-store",
    initialState: {
        games: [] as Game[],
        isFetch: true,
    },
    reducers: {
        setGames(state, { payload }: { payload: Game[] }) {
            state.games = [...payload];
            state.isFetch = false;
        },
        setFetch(state, { payload }: { payload: boolean }) {
            state.isFetch = payload;
        },
        add(state, { payload }: { payload: Game }) {
            state.games.push(payload);
        },
        remove(state, { payload }) {
            // state.games.pop(action.payload);
        },
    },
});

export default slice.reducer;
export const { add, remove, setGames, setFetch } = slice.actions;
