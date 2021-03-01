import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import useAsyncEffect from "use-async-effect";
import { Loader } from "../common/loader/Loader";
import { Game } from "../common/models/Game";
import { getCountGames, getGameDetails, getGames } from "../common/redux/api";
import { setFetch, setGames } from "../common/redux/games-reducer";
import { State } from "../common/redux/redux-reducer";
import { GameDetails } from "./games/GameDetails";
import { Games } from "./games/Games";
import Pagination from "react-js-pagination";
import { Search } from "./Search";
import { NotFound } from "./NotFound";

export const Main = compose(withRouter)(({ match }) => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const slug = match.params.gameSlug as string; // название игры в адресной строке
    const dispatch = useDispatch();
    const [selectedGame, setSelectedGame] = useState({} as Game);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);

    useAsyncEffect(async () => setTotal(await getCountGames()), []);
    useAsyncEffect(async () => {
        dispatch(setFetch(true));
        setSelectedGame(await getGameDetails(slug));
        dispatch(setFetch(false));
    }, [slug]);
    useAsyncEffect(async () => {
        dispatch(setFetch(true));
        dispatch(setGames(await getGames(currentPage)));
    }, [currentPage]);
    return isFetch ? (
        <Loader />
    ) : slug ? (
        <GameDetails>{selectedGame}</GameDetails>
    ) : (
        <>
            <Search
                onSubmit={({ gameName }: any) =>
                    dispatch(setGames(games.filter((g) => g.name === gameName)))
                }
            />
            <p />
            <Games>{games}</Games>
            {games.length ? (
                <Pagination
                    totalItemsCount={total}
                    onChange={setCurrentPage}
                    activePage={currentPage}
                    itemsCountPerPage={21}
                    activeClass="active"
                    activeLinkClass="link"
                    itemClass="page-item"
                    linkClass="page-link"
                    prevPageText="<|"
                    nextPageText="|>"
                    firstPageText="<<|"
                    lastPageText="|>>"
                    hideFirstLastPages
                    innerClass="pagination pagination-lg justify-content-center"
                    disabledClass="disabled"
                />
            ) : (
                <NotFound />
            )}
        </>
    );
});
