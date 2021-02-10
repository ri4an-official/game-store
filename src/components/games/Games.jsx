import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GameDetails } from "./GameDetails";

export const Games = () => {
    const games = useSelector((state) => state.gamesStore.games);
    const [game, setGame] = useState({});
    const [id, setId] = useState(0);
    useEffect(() => setGame(games.filter((g) => g.id === id)[0]), [id]);
    return (
        <>
            {/* <ol>
                {Array(100)
                    .fill(0)
                    .map((_, i) => (
                        <li>
                            <b>
                                {(i % 3 === 0 ? "Fizz" : "") +
                                    (i % 5 === 0 ? "Buzz" : "") || i}
                            </b>
                        </li>
                    ))}
            </ol> */}
            <div>
                <Link
                    className="btn btn-primary noblock right"
                    to="/game-store/create-game"
                >
                    Add Game
                </Link>
                <h1 className="noblock">Games</h1>
            </div>
            <br />
            <div className="games">
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
const Game = ({ children, setId }) => (
    <div onClick={setId} className="game shadow">
        <h2 className="noblock">{children.title}</h2>{" "}
        <b className="noblock right">{children.price} руб.</b>
        <div>
            <Button variant="secondary">Add to basket</Button>
        </div>
    </div>
);
