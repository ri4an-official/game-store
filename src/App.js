import "./App.css";
import { Games } from "./components/games/Games";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Redirect, Route, Switch } from "react-router";
import { Login } from "./components/login/Login";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { CreateGame } from "./components/games/CreateGame";
import { useState } from "react";
export const App = () => (
    <div className="app">
        <Menu />
        <div className="app-content container">
            {/* <Fun /> */}
            <Switch>
                <Route exact path="/games/:gameSlug?" component={Games} />
                <Route exact path="/" component={Games} />
                <Route path="/basket" component={Basket} />
                <Route path="/login" component={Login} />
                <Route path="/create-game" component={CreateGame} />
                <Redirect from="/game-store" to="/games" />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
function Fun() {
    const [sum, setSum] = useState(0);
    const sums = [];
    return (
        <div>
            <input
                onChange={(e) => {
                    setSum(sum + e.target.value);
                    sums.push(sum);
                }}
            />
            <ul>
                {sums.map((s) => (
                    <li>{s}</li>
                ))}
            </ul>
        </div>
    );
}
