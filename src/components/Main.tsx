import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loader } from "../common/loader/Loader"
import { getGamesCount } from "../common/redux/api"
import { setGamesAsync } from "../common/redux/games-reducer"
import { State } from "../common/redux/redux-reducer"
import { Games } from "./games/Games"
import { Search } from "./Search"
import useAsyncEffect from "use-async-effect"
import Pagination from "react-js-pagination"
import { useHistory, useParams } from "react-router"

export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore)
    const page = Number(useParams<any>().page ?? 1)
    const history = useHistory()
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(page)
    const [total, setTotal] = useState(0)
    useAsyncEffect(async () => setTotal(await getGamesCount()), [])
    useAsyncEffect(() => dispatch(setGamesAsync(page)), [page])
    return !isFetch ? (
        <>
            <Search
                onSubmit={({ name }) =>
                    history.push(
                        `/games/${
                            games.find((g) => g.slug.includes(name))?.slug ??
                            name.replaceAll(" ", "-").toLowerCase()
                        }`
                    )
                }
            />
            <p />
            <Games>{games}</Games>
            <p />
            <Pagination
                onChange={(p) => {
                    setCurrentPage(p)
                    history.push(`/${p === 1 ? "" : p}`)
                }}
                totalItemsCount={total}
                activePage={currentPage}
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
