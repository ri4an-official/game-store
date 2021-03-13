import { useSelector } from "react-redux";
import { State } from "./common/redux/redux-reducer";
import { Games } from "./components/games/Games";

export const Profile = () => {
    const myGames = useSelector((state: State) => state.login.user.games);
    return (
        <>
            <h2 className="center">Profile</h2>
            <h4>My Games</h4>
            <Games>{myGames}</Games>
        </>
    );
};