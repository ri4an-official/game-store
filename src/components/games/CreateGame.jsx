import { AddGameForm } from "./AddGameForm";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../common/redux/games-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";

export const CreateGame = compose(withRouter)((props) => {
    const lastId = useSelector(
        (state) =>
            state.gamesStore.games
                .map((g) => g.id)
                .filter((id) => id)
                .reverse()[0]
    );
    const dispatch = useDispatch();
    return (
        <>
            <h1>Add game</h1>
            <AddGameForm
                onSubmit={({ title, price }) => {
                    dispatch(
                        add({
                            id: lastId + 1,
                            title,
                            price,
                        })
                    );
                    props.history.push("/");
                }}
            />
        </>
    );
});
