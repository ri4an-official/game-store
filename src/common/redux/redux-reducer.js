import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "redux-form";
import basketReducer from "./basket-reducer";
import gamesReducer from "./games-reducer";
import { login } from "./login-form";

const store = configureStore({
    reducer: {
        gamesStore: gamesReducer,
        form: reducer,
        basket: basketReducer,
        login,
    },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});
window.store = store;
export default store;
