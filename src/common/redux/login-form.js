import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "login",
    initialState: {
        users: [
            { username: "Vadim", password: "123" },
            { username: "Vasya", password: "111" },
        ],
        auth: true,
        username: "Vadim",
        error: "",
    },
    reducers: {
        login(state, { payload }) {
            if (
                state.users.filter(
                    (u) =>
                        u.password === payload.password &&
                        u.username === payload.username
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
