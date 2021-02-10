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
    <div className="app container">
        <Menu />
        <div className="app-content">
            {/* prettier-ignore */}
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Games} />
                <Route path={`${process.env.PUBLIC_URL}/basket`} component={withRedirect(Basket)} />
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} />
                <Route path={`${process.env.PUBLIC_URL}/login`} component={CreateGame} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);
