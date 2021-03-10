import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../common/loader/Loader";
import { getCountGames } from "../common/redux/api";
import { setGamesOnPage, search } from "../common/redux/games-reducer";
import { State } from "../common/redux/redux-reducer";
import { Games } from "./games/Games";
import { Search } from "./Search";
import useAsyncEffect from "use-async-effect";
import Pagination from "react-js-pagination";

export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    useAsyncEffect(async () => setTotal(await getCountGames()), []);
    useAsyncEffect(() => dispatch(setGamesOnPage(currentPage)), [currentPage]);

    return isFetch ? (
        <Loader />
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
                <Loader />
            )}
        </>
    );
};
