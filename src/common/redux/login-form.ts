import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

let initialState = {
    users: [
        { name: "Vadim", password: "1" },
        { name: "Vasya", password: "2" },
    ] as User[],
    auth: true,
    username: "Vadim",
    error: "",
};
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
