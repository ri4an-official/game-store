import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Loader } from "../common/loader/Loader";
import { Game } from "../common/models/Game";
import { getCountGames } from "../common/redux/api";
import {
    selectGameOnPage as selectGame,
    setGamesOnPage,
    search,
} from "../common/redux/games-reducer";
import { State } from "../common/redux/redux-reducer";
import { GameDetails } from "./games/GameDetails";
import { Games } from "./games/Games";
import { Search } from "./Search";
import { NotFound } from "./NotFound";
import useAsyncEffect from "use-async-effect";
import Pagination from "react-js-pagination";

export const Main = compose(withRouter)(({ match }) => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const dispatch = useDispatch();
    const slug = match.params.gameSlug as string; // название игры в адресной строке
    const [selectedGame, setSelectedGame] = useState({} as Game);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    useAsyncEffect(async () => setTotal(await getCountGames()), []);
    useAsyncEffect(() => dispatch(setGamesOnPage(currentPage)), [currentPage]);
    useAsyncEffect(() => dispatch(selectGame(setSelectedGame, slug)), [slug]);
    return isFetch ? (
        <Loader />
    ) : slug ? (
        <GameDetails>{selectedGame}</GameDetails>
    ) : (
        <>
            <Search onSubmit={async ({ name }) => dispatch(search(name))} />
            <p />
            <Games>{games}</Games>
            <p />
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
                    innerClass="pagination pagination-lg justify-content-center"
                    disabledClass="disabled"
                />
            ) : (
                <NotFound />
            )}
        </>
    );
});
