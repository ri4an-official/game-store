import { useSelector } from "react-redux"
import { State } from "../redux/redux-reducer"

export const useLoader = () => {
    const { isFetch } = useSelector((state: State) => state.gamesStore)

    return
}
