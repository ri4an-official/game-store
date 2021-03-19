import { Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRedirect } from "../common/hocs/withRedirect";
import { remove, buyGames } from "../common/redux/basket-reducer";
import { State } from "../common/redux/redux-reducer";
import { Title } from "../common/Title";
import bin from "./../common/images/free-icon-dustbin-4205487.svg";
import { Money } from "./Money";
export const Basket = withRedirect(() => {
    const games = useSelector((state: State) => state.basket.games);
    const { user, error } = useSelector((state: State) => state.login);
    const dispatch = useDispatch();
    return (
        <div className="container basket">
            <Title noblock>Basket</Title>
            <h5 className="noblock right green">
                <Money>{user.sum}</Money>
            </h5>
            {error && <Alert variant="red">{error}</Alert>}
            {!games.length ? (
                <h4 className="center red">Basket is empty</h4>
            ) : (
                <>
                    {games.map((g) => (
                        <>
                            <div className="game-in-basket shadow">
                                <h3 className="noblock item">{g.name}</h3>
                                <Money>{g.price}</Money>
                                <img
                                    className="btn btn-danger item right"
                                    onClick={() => dispatch(remove(g.id))}
                                    src={bin}
                                />
                            </div>
                            <p />
                        </>
                    ))}
                    <Button
                        className="right"
                        variant="success"
                        onClick={() => dispatch(buyGames(games))}
                    >
                        + Buy
                    </Button>
                </>
            )}
        </div>
    );
});
