import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { withRedirect } from "../common/hocs/withRedirect";
import { remove } from "../common/redux/basket-reducer";
import { State } from "../common/redux/redux-reducer";
import { Title } from "../common/Title";
import bin from "./../common/images/free-icon-dustbin-4205487.svg";
export const Basket = compose(withRedirect)(() => {
    const games = useSelector((state: State) => state.basket.games);
    const dispatch = useDispatch();
    return (
        <div className="container basket">
            <Title>Basket</Title>
            {!games.length ? (
                <h4 className="center red">Basket is empty</h4>
            ) : (
                games.map((g) => (
                    <>
                        <div className="game-in-basket shadow">
                            <h3 className="noblock item">{g.name}</h3>
                            <img
                                className="btn btn-danger item right"
                                onClick={() => dispatch(remove(g.id))}
                                src={bin}
                            />
                        </div>
                        <p />
                    </>
                ))
            )}
        </div>
    );
});
