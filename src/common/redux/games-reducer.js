import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "gamesStore",
    initialState: {
        games: [],
    },
    reducers: {
        setGames(state, { payload }) {
            state.games = [...payload];
        },
        add(state, action) {
            state.games.push(action.payload);
        },
        remove(state, action) {
            state.games.pop(action.payload);
        },
    },
});

export default slice.reducer;
export const { add, remove, setGames } = slice.actions;
