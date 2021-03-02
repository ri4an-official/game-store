import "./App.css";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Redirect, Route, Switch } from "react-router";
import { Login } from "./components/login/Login";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { Main } from "./components/Main";
export const App = () => (
    <div className="app">
        <Menu />
        <div className="app-content container">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/games/:gameSlug?" component={Main} />
                <Route path="/basket" component={Basket} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
