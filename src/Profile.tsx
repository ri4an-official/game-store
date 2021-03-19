import { useSelector } from "react-redux";
import { State } from "./common/redux/redux-reducer";
import { Title } from "./common/Title";
import { GameItem } from "./components/games/GameItem";

export const Profile = () => {
    const myGames = useSelector((state: State) => state.login.user.games);
    return (
        <>
            <Title>Profile</Title>
            <h4>My Games</h4>
            {myGames.map((g) => (
                <GameItem key={g.id}>{g}</GameItem>
            ))}
        </>
    );
};
