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

const calc = (items: any[], options: any) => items.map((i) => i.price + i.quan);

export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    useAsyncEffect(async () => setTotal(await getCountGames()), []);
    useAsyncEffect(() => dispatch(setGamesOnPage(currentPage)), [currentPage]);
    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //         currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    // }
    // Array(1000)
    //     .fill(0)
    //     .map((n, i) => i + 1)
    //     .reverse()
    //     .forEach((n) => {
    //         n - 7 > 0 && console.log(`${n} - ${n - 7}`);
    //         sleep(50);
    //     });
    return isFetch ? (
        <Loader />
    ) : (
        <>
            <Search onSubmit={async ({ name }) => dispatch(search(name))} />
            <p />
            <Games>{games}</Games>
            <p />
            {games.length && (
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
                    hideFirstLastPages
                    lastPageText="|>>"
                    innerClass="pagination pagination-lg justify-content-center"
                    disabledClass="disabled"
                />
            )}
        </>
    );
};
