import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

let initialState = {
    games: [] as Game[],
};
const slice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket({ games }, { payload }: { payload: Game }): void {
            games.push(payload);
        },
        remove({ games }, { payload }: { payload: number }): void {
            games = _.remove(games, { id: payload });
        },
    },
});
export default slice.reducer;
export const { addToBasket, remove } = slice.actions;
