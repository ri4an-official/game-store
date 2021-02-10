import "./App.css";
import { Games } from "./components/games/Games";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { withRedirect } from "./components/hocs/withRedirect";
import { CreateGame } from "./components/games/CreateGame";
export const App = () => (
    <div className="app">
        <Menu />
        <div className="app-content">
            <Switch>
                <Route exact path="/game-store/" component={Games} />
                <Route path="/game-store/basket" component={withRedirect(Basket)} />
                <Route path="/game-store/login" component={Login} />
                <Route path="/game-store/register" component={Register} />
                <Route path="/game-store/create-game" component={CreateGame} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
