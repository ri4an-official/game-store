import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../models/Game";
import { User } from "../models/User";

const slice = createSlice({
    name: "login",
    initialState: {
        users: [
            { name: "Vadim", password: "1", sum: 10000, games: [] as Game[] },
            { name: "Vasya", password: "2", sum: 1000, games: [] as Game[] },
        ] as User[],
        auth: true,
        user: {
            name: "Vadim",
            password: "1",
            sum: 10000,
            games: [] as Game[],
        } as User,
        error: "",
    },
    reducers: {
        login(state, { payload }: { payload: User }) {
            if (
                state.users.some(
                    (u) =>
                        u.password === payload.password &&
                        u.name === payload.name
                )
            ) {
                state.auth = true;
                state.user = payload;
                state.users.push({ ...payload });
            } else state.error = "User not found";
        },
        buy({ user, error }, { payload }: { payload: Game[] }) {
            let sum = payload.map((g) => g.price).reduce((pv, cv) => pv + cv);
            if (user.sum >= sum) {
                user.games.push(
                    ...payload.map((g) => ({
                        ...g,
                        isBuy: true,
                        key: generateKey(),
                    }))
                );
                payload = [];
                user.sum = user.sum - sum;
            } else error = "Sum is not enough";
        },
    },
});
const keys = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789";
const generateKey = () =>
    Array(16)
        .fill(0)
        .map((_, i) =>
            i === 3 || i === 7 || i === 11
                ? keys[randomInteger(0, keys.length - 1)] + "-"
                : keys[randomInteger(0, keys.length - 1)]
        )
        .join()
        .replaceAll(",", "");
function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
export default slice.reducer;
export const { login, buy } = slice.actions;
