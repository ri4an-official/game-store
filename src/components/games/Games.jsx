import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Game } from "./Game";
import { GameDetails } from "./GameDetails";

export const Games = () => {
    const games = useSelector((state) => state.gamesStore.games);
    const [game, setGame] = useState({});
    const [id, setId] = useState(0);
    useEffect(() => setGame(games.filter((g) => g.id === id)[0]), [id]);
    return (
        <>
            <div>
                <Link
                    className="btn btn-primary noblock right"
                    to="/create-game"
                >
                    Add Game
                </Link>
                <h1 className="noblock">Games</h1>
            </div>
            <br />
            <div className="games container">
                <div className="block-left">
                    {games.map((g) => (
                        <>
                            <Game key={Date.now()} setId={() => setId(g.id)}>
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
        </>
    );
};

