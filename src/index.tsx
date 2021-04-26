import { StrictMode } from "react"
import { App } from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import store from "./common/redux/redux-reducer"
import { BrowserRouter } from "react-router-dom"
import { render } from "react-dom"

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
