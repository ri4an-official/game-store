import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    games: [] as Game[],
};
export type Basket = typeof initialState;
const slice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        add({ games }, { payload }): void {
            games.push(payload);
        },
        remove({ games }, { payload }): void {
            // games.pop(games.filter((g) => g.id === payload)[0]);
        },
    },
});
export default slice.reducer;
export const { add, remove } = slice.actions;
