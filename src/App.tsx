import "./App.css";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router";
import { Login } from "./components/login/Login";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { Main } from "./components/Main";
import { GameDetails } from "./components/games/GameDetails";
export const App = () => (
    <div className="app">
        <section>
            <Menu />
        </section>
        <section className="app-content container">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/games" component={Main} />
                <Route path="/games/:gameSlug?" component={GameDetails} />
                <Route path="/basket" component={Basket} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </section>
        <section>
            <Footer />
        </section>
    </div>
);
