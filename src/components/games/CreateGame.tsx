import { AddGameForm } from "./AddGameForm";
import { useDispatch } from "react-redux";
import { add } from "../../common/redux/games-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Title } from "../../common/Title";
import { Game } from "../../common/models/Game";

export const CreateGame = compose(withRouter)(({ history }) => {
    const dispatch = useDispatch();
    return (
        <>
            <Title>Add game</Title>
            <AddGameForm
                onSubmit={(game: any) => {
                    dispatch(
                        add({
                            ...game,
                            id: Date.now(),
                        })
                    );
                    history.push("/");
                }}
            />
        </>
    );
});
