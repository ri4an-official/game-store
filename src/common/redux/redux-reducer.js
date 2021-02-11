import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "redux-form";
import gamesReducer from "./games-reducer";

const store = configureStore({
    reducer: { gamesStore: gamesReducer, form: reducer },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});
window.store = store;
export default store;
