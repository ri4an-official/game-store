import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setGames, setFetch } from "../../common/redux/games-reducer";
import { Loader } from "../../common/loader/Loader";
import { getCountGames, getGames } from "../../common/redux/api";
import { State } from "../../common/redux/redux-reducer";
import { Game } from "../../common/models/Game";
import { Title } from "../../common/Title";
import Pagination from "rc-pagination";
import { GameItem } from "./GameItem";
import { GameDetails } from "./GameDetails";

export const Games = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const dispatch = useDispatch();

    const [game, setGame] = useState({} as Game);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    //@ts-ignore
    useEffect(() => getCountGames().then((count) => setTotal(count)), []);
    useEffect(() => {
        dispatch(setFetch(true));
        //@ts-ignore
        getGames(currentPage).then((games) => dispatch(setGames(games)));
    }, [currentPage]);
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
                <Title noblock>Games</Title>
            </div>
            <br />
            {isFetch ? (
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
                    <Pagination
                        current={currentPage}
                        total={total}
                        pageSize={games.length}
                        onChange={(page, _) => setCurrentPage(page)}
                        className="center pagination"
                        jumpNextIcon="_"
                        jumpPrevIcon="_"
                        selectPrefixCls="page-item page-link active"
                        prevIcon="<<"
                        nextIcon=">>"
                    />
                </div>
            )}
        </>
    );
};

