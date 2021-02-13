import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setGames } from "../../common/redux/games-reducer";
import { Game } from "./Game";
import { GameDetails } from "./GameDetails";
import { Loader } from "./../../common/loader/Loader";
import axios from "axios";
export const Games = () => {
    const games = useSelector((state) => state.gamesStore.games);
    const [game, setGame] = useState({});
    const [id, setId] = useState(0);
    const dispatch = useDispatch()
    useEffect(
        () =>
            axios
                .get("https://rawg-video-games-database.p.rapidapi.com/games", {
                    headers: {
                        "x-rapidapi-key":
                            "37437d4ec5msh0b5b355674a5af8p1f7993jsndb1173addba0",
                        "x-rapidapi-host":
                            "rawg-video-games-database.p.rapidapi.com",
                    },
                })
                .then((r) => {
                    dispatch(setGames(r.data.results));
                    console.log(r.data.results);
                })
                .catch((err) => console.log(err)),
        []
    );
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
                                <Game
                                    key={Date.now()}
                                    setId={() => setId(g.id)}
                                >
                                    {g}
                                </Game>
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
