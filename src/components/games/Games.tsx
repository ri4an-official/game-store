import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setGames } from "../../common/redux/games-reducer";
import { Loader } from "../../common/loader/Loader";
import { getGames } from "../../common/redux/api";
import { State } from "../../common/redux/redux-reducer";
import { Game } from "../../common/models/Game";
import { add } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const Games = () => {
    const games = useSelector((state: State) => state.gamesStore.games);
    const [game, setGame] = useState({} as Game);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    //@ts-ignore
    useEffect(() => getGames().then((games) => dispatch(setGames(games))), []);
    useEffect(() => setGame(games.filter((g) => g.id === id)[0]), [id]);
    return (
        <>
            <div>
                <Link
                    className="btn btn-primary noblock right"
                    to="/create-game"
                >
                    + Add game
                </Link>
                <h1 className="noblock">Games</h1>
            </div>
            <br />
            {!games.length ? (
                <Loader />
            ) : (
                <div className="games container">
                    <div className="block-left">
                        {games.map((g) => (
                            <>
                                <GameItem
                                    key={Date.now()}
                                    setId={() => setId(g.id)}
                                >
                                    {g}
                                </GameItem>
                                <p key={Date.now() + 1} />
                            </>
                        ))}
                    </div>
                    <div className="block-right">
                        <GameDetails>{game}</GameDetails>
                    </div>
                </div>
            )}
        </>
    );
};
const GameItem = ({
    children,
    setId,
}: {
    setId: () => void;
    children: Game;
}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={setId} className="game shadow">
            <h4 className="noblock">{children.name}</h4>
            <b className="noblock right">{children.rating} / 10</b>
            <div onClick={() => dispatch(add({ ...children }))}>
                <img className="right" src={basket} />
                <h3 className="noblock right">+</h3>
            </div>
        </div>
    );
};
const GameDetails = ({ children }: { children: Game }) => {
    return (
        <span className="game-description">
            <h3 className="noblock">{children && children.name}</h3>{" "}
            <b className="noblock right">
                {children && children.rating + " / 10"}{" "}
            </b>
        </span>
    );
};
