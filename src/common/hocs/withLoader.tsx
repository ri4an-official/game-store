import { FC } from "react"
import { useSelector } from "react-redux"
import { State } from "../redux/redux-reducer"
import { Loader } from "../loader/Loader"
export const withLoader = (Component: FC<any>) => (props?: any) => {
    const isFetch = useSelector((state: State) => state.gamesStore.isFetch)
    return !isFetch ? <Component {...props} /> : <Loader />
}
