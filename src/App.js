import "./App.css";
import { Games } from "./components/games/Games";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { withRedirect } from "./common/hocs/withRedirect";
import { CreateGame } from "./components/games/CreateGame";
export const App = () => (
    <div className="app container">
        <Menu />
        <div className="app-content">
            <Switch>
                <Route exact path="/" component={Games} />
                <Route path="/basket" component={Basket} />
                <Route path="/login" component={Login} />
                {/* <Route path="/register" component={Register} /> */}
                <Route path="/create-game" component={CreateGame} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
