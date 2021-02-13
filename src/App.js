import "./App.css";
import { Games } from "./components/games/Games";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Redirect, Route, Switch } from "react-router";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { CreateGame } from "./components/games/CreateGame";
export const App = () => (
    <div className="app">
        <Menu />
        <div className="app-content container">
            <Switch>
                <Route exact path="/" component={Games} />
                <Route path="/basket" component={Basket} />
                <Route path="/login" component={Login} />
                {/* <Route path="/register" component={Register} /> */}
                <Route path="/create-game" component={CreateGame} />
                <Route path="/game-store" render={() => <Redirect to="/" />} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
