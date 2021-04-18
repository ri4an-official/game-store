import { useSelector } from "react-redux"
import { State } from "../common/redux/redux-reducer"
import { Title } from "./Title"
import { Games } from "./games/Games"

export default () => {
    const myGames = useSelector((state: State) => state.login.user.games)
    return (
        <>
            <Title>Profile</Title>
            <h4>My Games</h4>
            {myGames.length ? (
                <Games>{myGames}</Games>
            ) : (
                <h4 className="red center">You don't have bought games</h4>
            )}
        </>
    )
}
