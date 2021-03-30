import "./scss/App.scss"
import { Footer } from "./components/Footer"
import { Menu } from "./components/Menu"
import { Route, Switch } from "react-router"
import { Login } from "./components/login/Login"
import { Cart } from "./components/Cart"
import { NotFound } from "./components/NotFound"
import { Main } from "./components/Main"
import { GameDetails } from "./components/games/GameDetails"
import { Profile } from "./components/Profile"
import { withErrorHandler } from "./common/hocs/withErrorHandler"
export const App = withErrorHandler(() => (
    <div className="app">
        <Menu />
        <main className="app-content container">
            <Switch>
                <Route path="/games/:gameName?" component={GameDetails} />
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
