import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const slice = createSlice({
    name: "basket",
    initialState: {
        games: [
            { name: "CS:GO", price: 2000 },
            { name: "Overwatch", price: 100 },
            { name: "Overwatch", price: 100 },
            { name: "Overwatch", price: 100 },
            { name: "Overwatch", price: 100 },
            { name: "Overwatch", price: 100 },
        ] as Game[],
    },
    reducers: {
        addToBasket({ games }, { payload }: { payload: Game }) {
            games.push(payload);
        },
        dropGames(state) {
            state.games = [];
        },
        remove({ games }, { payload }: { payload: number }) {
            games = _.remove(games, { id: payload });
        },
    },
});
export default slice.reducer;
export const { addToBasket, remove, dropGames } = slice.actions;
