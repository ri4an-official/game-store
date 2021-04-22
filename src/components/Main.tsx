import { useEffect, useState } from "react"
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
import { withLoader } from "../common/hocs/withLoader"
import { useTheme } from "../common/hooks/useTheme"
import { useStore } from "effector-react"
import { $messages, deleteMessage, getDataFx } from "../common/effector/model"
import { useInput } from "../common/hooks/useInput"
import { addMessage } from "./../common/effector/model"
export const Main = () => {
    const { games, isFetch } = useSelector((state: State) => state.gamesStore)
    const page = Number(useParams<any>().page ?? 1)
    const term = useLocation().search.replaceAll("?term=", "")
    const history = useHistory()
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    useAsyncEffect(async () => setTotal(await getGamesCount(term)), [term])
    useAsyncEffect(() => dispatch(setGamesAsync(page, term)), [page, term])

    const messages = useStore($messages)
    const input = useInput("")
    return isFetch ? (
        <>
            <input {...input} />
            <button
                onClick={async () => {
                    addMessage(input.value)
                    getDataFx("https://jsonplaceholder.typicode.com/todos")
                }}
            >
                Add message
            </button>
            {messages.map((m, i) => (
                <div onClick={() => deleteMessage(i)}>{m} | -</div>
            ))}
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
