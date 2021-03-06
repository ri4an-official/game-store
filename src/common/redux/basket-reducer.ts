import { Dispatch } from "react";
import { Game } from "./../models/Game";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { buy } from "./login-form";

const slice = createSlice({
    name: "basket",
    initialState: {
        games: [] as Game[],
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
export const buyGames = (games: Game[]) => async (dispatch: Dispatch<any>) => {
    dispatch(buy(games));
    dispatch(dropGames());
};
