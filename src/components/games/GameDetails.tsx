import { Game } from "../../common/models/Game";
import { NotFound } from "../NotFound";
import { AddToBasket } from "../AddToBasket";
import { compose } from "redux";
import { withRouter } from "react-router";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { setFetch } from "../../common/redux/games-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails } from "../../common/redux/api";
import { Loader } from "../../common/loader/Loader";
import { State } from "../../common/redux/redux-reducer";
export const GameDetails = compose(withRouter)(({ match }) => {
    const myGames = useSelector((state: State) => state.login.user.games);
    const [selectedGame, setSelectedGame] = useState({} as Game);
    const dispatch = useDispatch();
    const slug = match.params.gameSlug as string; // название игры в адресной строке
    useAsyncEffect(async () => {
        dispatch(setFetch(true));
        const g = await getGameDetails(slug);
        setSelectedGame({
            ...g,
            isBuy: myGames.some((game) => game.name === g.name),
        });
        dispatch(setFetch(false));
    }, [slug]);
    return selectedGame.id ? (
        <>
            <span>
                <AddToBasket>{selectedGame}</AddToBasket>
            </span>
            <p>
                <img
                    className="center img"
                    height="150"
                    src={selectedGame.background_image}
                />
                <h1 className="center">{selectedGame.name}</h1>
                <strong
                    style={{ fontFamily: "Arial" }}
                    dangerouslySetInnerHTML={{
                        __html: selectedGame.description,
                    }}
                />
            </p>
        </>
    ) : (
        <Loader />
    );
});
