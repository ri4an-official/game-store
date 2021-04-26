import { useState } from "react"
import { Loader } from "../common/loader/Loader"
import { getGamesCount } from "../common/redux/api"
import { Games } from "./games/Games"
import { Search } from "./Search"
import useAsyncEffect from "use-async-effect"
import Pagination from "react-js-pagination"
import { useHistory, useLocation, useParams } from "react-router"
import { $gamesStore, setGamesFx } from "../common/models/games"
import { useStore } from "effector-react"
import { Error } from "./../common/error/Error"
import { Todos } from "./Todos"
export const Main = () => {
    const { games, isFetch, error } = useStore($gamesStore)
    const page = Number(useParams<any>().page ?? 1)
    const term = useLocation().search.replaceAll("?term=", "")
    const history = useHistory()
    const [total, setTotal] = useState(0)
    useAsyncEffect(async () => setTotal(await getGamesCount(term)), [term])
    useAsyncEffect(() => setGamesFx({ page, term }), [page, term])
    return isFetch ? (
        <Loader />
    ) : error ? (
        <Error>{error}</Error>
    ) : (
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
                    history.push(`/${p === 1 ? "" : p}${term && `?term=${term}`}`)
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
    )
}
