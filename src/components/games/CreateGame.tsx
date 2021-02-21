import { AddGameForm } from "./AddGameForm";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../common/redux/games-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { State } from "../../common/redux/redux-reducer";
import { Title } from "../../common/Title";

export const CreateGame = compose(withRouter)((props) => {
    const lastId = useSelector(
        (state: State) =>
            state.gamesStore.games
                .map((g) => g.id)
                .filter((id) => id)
                .reverse()[0]
    );
    const dispatch = useDispatch();
    return (
        <>
            <Title>Add game</Title>
            <AddGameForm
                onSubmit={(game) => {
                    dispatch(
                        add({
                            id: lastId + 1,
                            ...game,
                        })
                    );
                    props.history.push("/");
                }}
            />
        </>
    );
});
