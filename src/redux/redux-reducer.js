import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gamesReducer from "./games-reducer";

const store = configureStore({
    reducer: { gamesStore: gamesReducer },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});
window.store = store;
export default store;
