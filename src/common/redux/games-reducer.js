import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "gamesStore",
    initialState: {
        games: [
            { id: 0, title: "CS:GO", price: 1000 },
            { id: 1, title: "Overwatch", price: 2000 },
        ],
    },
    reducers: {
        add(state, action) {
            state.games.push(action.payload);
        },
        remove(state, action) {
            state.games.pop(action.payload);
        },
    },
});

export default slice.reducer;
export const { add, remove } = slice.actions;
