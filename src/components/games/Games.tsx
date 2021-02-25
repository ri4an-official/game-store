import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { setGames, setFetch } from "../../common/redux/games-reducer";
import { Loader } from "../../common/loader/Loader";
import {
    getCountGames,
    getGameDetails,
    getGames,
} from "../../common/redux/api";
import { State } from "../../common/redux/redux-reducer";
import { Game } from "../../common/models/Game";
import Pagination from "rc-pagination";
import { GameItem } from "./GameItem";
import { GameDetails } from "./GameDetails";
import { compose } from "redux";
import { NotFound } from "../NotFound";

export const Games = compose(withRouter)(({ match }) => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const slug = match.params.gameSlug as string;
    const dispatch = useDispatch();

    const [selectedGame, setSelectedGame] = useState({} as Game);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getCountGames().then((count) => setTotal(count));
    }, []);
    useEffect(() => {
        dispatch(setFetch(true));
        getGameDetails(slug).then((game) => {
            setSelectedGame(game);
            dispatch(setFetch(false));
        });
    }, [slug]);
    useEffect(() => {
        getGames(currentPage).then((games) => dispatch(setGames(games)));
    }, [currentPage]);

    return (
        <>
            {isFetch ? (
                <Loader />
            ) : slug ? (
                <GameDetails>{selectedGame}</GameDetails>
            ) : (
                <div className="games container">
                    <div className="">
                        {games.map((g) => (
                            <GameItem key={Date.now()}>{g}</GameItem>
                        ))}
                    </div>
                    {/* <div className="block-right">
                        <GameDetails>{game}</GameDetails>
                    </div> */}
                    <div className="center">
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
                </div>
            )}
        </>
    );
});
