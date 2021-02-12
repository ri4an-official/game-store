import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withRedirect } from "../common/hocs/withRedirect";
import { remove } from "../common/redux/basket-reducer";
import bin from "./../common/images/free-icon-dustbin-4205487.svg";
export const Basket = compose(
    withRouter,
    withRedirect
)(() => {
    const games = useSelector((state) => state.basket.games);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h2>Basket</h2>
            {games.map((g) => (
                <>
                    <div className="game-in-basket shadow">
                        <h4 className="noblock item">{g.title}</h4>
                        <img
                            className="btn btn-danger item right"
                            onClick={() => dispatch(remove(g.id))}
                            src={bin}
                        />{" "}
                        <strong className="right item">{g.price} руб.</strong>
                    </div>
                    <p />
                </>
            ))}
        </div>
    );
});
