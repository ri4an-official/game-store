import "./common/scss/App.scss"
import { Footer } from "./components/Footer"
import { Menu } from "./components/Menu"
import { Route, Switch } from "react-router"
import { NotFound } from "./components/NotFound"
import { Main } from "./components/Main"
import { withErrorHandler } from "./common/hocs/withErrorHandler"
import { lazy } from "react"
import { withSuspense } from "./common/hocs/withSuspense"
const Login = withSuspense(lazy(() => import("./components/Login")))
const Cart = withSuspense(lazy(() => import("./components/Cart")))
const Profile = withSuspense(lazy(() => import("./components/Profile")))
const GameDetails = withSuspense(lazy(() => import("./components/games/GameDetails")))

export const App = withErrorHandler(() => (
    <div className="app">
        <Menu />
        <main className="app-content container">
            <Switch>
                <Route path="/games/:title?" component={GameDetails} />
                <Route path="/cart" component={Cart} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route exact path="/:page?" component={Main} />
                <Route component={NotFound} />
            </Switch>
        </main>
        <Footer />
    </div>
))
