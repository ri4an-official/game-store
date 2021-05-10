import { useState } from "react"
import { Loader } from "../common/loader/Loader"
import { getGamesCount } from "../common/redux/api"
import { Games } from "./games/Games"
import { Search } from "./Search"
import useAsyncEffect from "use-async-effect"
import Pagination from "react-js-pagination"
import { useHistory, useLocation, useParams } from "react-router"
import { $error, $games, $isFetch, setGames } from "../common/models/games"
import { useStore } from "effector-react"
import { Error } from "./../common/error/Error"
export const Main = () => {
    const games = useStore($games)
    const isFetch = useStore($isFetch)
    const error = useStore($error)
    const page = Number(useParams<any>().page ?? 1)
    const search = useLocation().search.replaceAll("?search=", "")
    const history = useHistory()
    const [total, setTotal] = useState(0)
    useAsyncEffect(async () => setTotal((await getGamesCount(search)) ?? 1), [search])
    useAsyncEffect(() => setGames({ page, search }), [page, search])
    return (
        <>
            <Search />
            {(isFetch && <Loader />) || (error && <Error>{error}</Error>) || (
                <>
                    <p />
                    <Games>{games}</Games>
                    <p />
                    <Pagination
                        onChange={(p) =>
                            history.push(
                                `/${p === 1 ? "" : p}${search && `?search=${search}`}`
                            )
                        }
                        totalItemsCount={total}
                        itemsCountPerPage={21}
                        activePage={page}
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
            )}
        </>
    )
}
