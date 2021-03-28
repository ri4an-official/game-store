import { Game } from "../../common/models/Game";
import { AddToBasket } from "../AddToBasket";
import { useParams } from "react-router";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { setFetch } from "../../common/redux/games-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails } from "../../common/redux/api";
import { Loader } from "../../common/loader/Loader";
import { State } from "../../common/redux/redux-reducer";

export const GameDetails = () => {
    const myGames = useSelector((state: State) => state.login.user.games);
    const [selectedGame, setSelectedGame] = useState({} as Game);
    const dispatch = useDispatch();
    const { gameName } = useParams<{ gameName: string }>();
    useAsyncEffect(async () => {
        dispatch(setFetch(true));
        const game = await getGameDetails(gameName);
        setSelectedGame({
            ...game,
            //* наконец то пофиксил :)
            price: game.rating * 80,
            isBuy: myGames.some((g) => g.name === game.name),
        });
        dispatch(setFetch(false));
    }, [gameName]);
    return selectedGame.name ? (
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
                <p />
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
};
