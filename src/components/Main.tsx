import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loader } from "../common/loader/Loader"
import { getGamesCount } from "../common/redux/api"
import { setGamesAsync } from "../common/redux/games-reducer"
import { State } from "../common/redux/redux-reducer"
import { Games } from "./games/Games"
import { Search } from "./Search"
import useAsyncEffect from "use-async-effect"
import Pagination from "react-js-pagination"
import { useHistory, useLocation, useParams } from "react-router"

export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore)
    const page = Number(useParams<any>().page ?? 1)
    const term = useLocation().search.replaceAll("?term=", "")
    const history = useHistory()
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    useAsyncEffect(async () => setTotal(await getGamesCount(term)), [term])
    useAsyncEffect(() => dispatch(setGamesAsync(page, term)), [page, term])
    return !isFetch ? (
        <>
            {/* <video controls autoPlay loop muted width="600" height="350">
                <source src="https://youtu.be/VRjkP63ajHk?t=7" />
            </video> */}
            <Search />
            <p />
            <Games>{games}</Games>
            <p />
            <Pagination
                onChange={(p) =>
                    history.push(
                        `/${p === 1 ? "" : p}${term && `?term=${term}`}`
                    )
                }
                totalItemsCount={total}
                activePage={page}
                itemsCountPerPage={20}
                activeClass="active"
                activeLinkClass="link"
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="<|"
                nextPageText="|>"
                firstPageText="<<"
                lastPageText=">>"
                innerClass="pagination pagination-lg justify-content-center"
                disabledClass="disabled"
            />
        </>
    ) : (
        <Loader />
    )
}
