import "./App.css";
import { Games } from "./components/games/Games";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Basket } from "./components/Basket";
import { NotFound } from "./components/NotFound";
import { AddGameForm } from "./components/games/AddGameForm";
import { useSelector } from "react-redux";
import { withRedirect } from "./components/hocs/withRedirect";

export const App = () => {
    const games = useSelector((state) => state.gamesStore.games);
    return (
        <div className="app">
            <Menu />
            <div className="app-content">
                <Switch>
                    <Route exact path="/" component={Games} />
                    <Route path="/basket" component={withRedirect(Basket)} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                    <Route
                        path="/create-game"
                        render={() => (
                            <AddGameForm
                                addGame={({ title, price }) =>
                                    games.push({
                                        // prettier-ignore
                                        id: games.map((g) => g.id).reverse()[0] + 1,
                                        title,
                                        price,
                                    })
                                }
                            />
                        )}
                    />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};
