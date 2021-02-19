import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { getJSDocReturnType } from "typescript";
// import { reducer as formReducer } from "redux-form";
import basketReducer from "./basket-reducer";
import gamesReducer from "./games-reducer";
import loginReducer from "./login-form";
const reducer = combineReducers({
    gamesStore: gamesReducer,
    // form: formReducer,
    basket: basketReducer,
    login: loginReducer,
});
export type State = ReturnType<typeof reducer>;
const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});
export default store;
