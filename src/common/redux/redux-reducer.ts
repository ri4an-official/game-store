import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { reducer as formReducer } from "redux-form"
import basketReducer from "./basket-reducer"
import loginReducer from "./login-form"
const reducer = combineReducers({
    basket: basketReducer,
    login: loginReducer,
    form: formReducer,
})
export type State = ReturnType<typeof reducer>
const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})
export default store
