import "./common/scss/App.scss"
import { Footer } from "./components/Footer"
import { Menu } from "./components/Menu"
import { Route, Switch } from "react-router"
import { NotFound } from "./components/NotFound"
import { Main } from "./components/Main"
import { lazy } from "react"
import { withSuspense } from "./common/hocs/withSuspense"
import { GameDetails } from "./components/games/GameDetails"
const Login = withSuspense(lazy(() => import("./components/Login")))
const Cart = withSuspense(lazy(() => import("./components/Cart")))
const Profile = withSuspense(lazy(() => import("./components/Profile")))

export const App = () => (
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
)
