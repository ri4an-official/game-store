import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { AddGameForm } from "./AddGameForm";
import { GameDetails } from "./GameDetails";

export const Games = () => {
    const games = useSelector((state) => state.gamesStore.games);
    const [game, setGame] = useState({});
    const [id, setId] = useState(0);
    useEffect(() => setGame(games.filter((g) => g.id === id)[0]), [id]);
    // const dispatch = useDispatch();
    return (
        <>
            <div className="games">
                <div className="block-left">
                    {games.map((g) => (
                        <>
                            <Game setId={() => setId(g.id)}>{g}</Game>
                            <p />
                        </>
                    ))}
                </div>
                <div className="block-right">
                    <GameDetails>{game}</GameDetails>
                </div>
            </div>
            <Button href="/create-game" variant="primary">
                Add Game
            </Button>
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
