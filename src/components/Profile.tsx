import { useSelector } from "react-redux";
import { State } from "../common/redux/redux-reducer";
import { Title } from "./Title";
import { Games } from "./games/Games";

export const Profile = () => {
    const myGames = useSelector((state: State) => state.login.user.games);
    return (
        <>
            <Title>Profile</Title>
            <h4>My Games</h4>
            <Games>{myGames}</Games>
        </>
    );
};