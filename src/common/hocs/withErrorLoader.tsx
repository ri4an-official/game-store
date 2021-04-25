import { FC } from "react"
import { Loader } from "../loader/Loader"
import { $gamesStore } from "../store/games"
import { useStore } from "effector-react"
import { Error } from "./../error/Error"
export const withErrorLoader = (Component: FC<any>) => (props?: any) => {
    const { error, isFetch } = useStore($gamesStore)
    return isFetch ? (
        <Loader />
    ) : error ? (
        <Error>{error}</Error>
    ) : (
        <Component {...props} />
    )
}
