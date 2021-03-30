import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../common/loader/Loader";
import { getCountGames } from "../common/redux/api";
import { setGamesOnPage } from "../common/redux/games-reducer";
import { State } from "../common/redux/redux-reducer";
import { Games } from "./games/Games";
import { Search } from "./Search";
import useAsyncEffect from "use-async-effect";
import Pagination from "react-js-pagination";
import { useHistory, useParams } from "react-router";

export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore);
    const page = Number(useParams<{ page: string }>().page ?? 1);
    const history = useHistory();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(page);
    const [total, setTotal] = useState(0);

    useAsyncEffect(async () => setTotal(await getCountGames()), []);
    useAsyncEffect(() => dispatch(setGamesOnPage(page)), [page]);
    return !isFetch ? (
        <>
            <Search
                onSubmit={({ name }) =>
                    history.push(
                        `/games/${name.replaceAll(" ", "-").toLowerCase()}`
                    )
                }
            />
            <p />
            <Games>{games}</Games>
            <p />
            <Pagination
                totalItemsCount={total}
                onChange={(p) => {
                    setCurrentPage(p);
                    history.push(`/${p}`);
                }}
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
        </>
    ) : (
        <Loader />
    );
};
