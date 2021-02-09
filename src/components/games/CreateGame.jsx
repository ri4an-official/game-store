import { AddGameForm } from "./AddGameForm";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/games-reducer";

export const CreateGame = () => {
    const lastId = useSelector(
        (state) =>
            state.gamesStore.games
                .map((g) => g.id)
                .filter((id) => id)
                .reverse()[0] + 1
    );
    const dispatch = useDispatch();
    return (
        <>
            <AddGameForm
                onSubmit={({ title, price }) =>
                    dispatch(
                        add({
                            id: lastId + 1,
                            title,
                            price,
                        })
                    )
                }
            />
        </>
    );
};
