import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

let initialState = {
    users: [
        { name: "Vadim", password: "123" },
        { name: "Vasya", password: "111" },
    ] as User[],
    auth: true,
    username: "Vadim",
    error: "",
};
export type Login = typeof initialState;
const slice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state, { payload }) {
            if (
                state.users.filter(
                    (u) =>
                        u.password === payload.password &&
                        u.name === payload.username
                )
            ) {
                state.auth = true;
                state.username = payload.username;
                state.users.push(...payload);
            } else state.error = "User not found";
        },
    },
});
export default slice.reducer;
export const { login } = slice.actions;
