import { useDispatch } from "react-redux";
import { Game } from "../../common/models/Game";
import { addToBasket } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
import { Rating } from "../Rating";
import { compose } from "redux";
import { withRouter } from "react-router";
export const GameItem = compose(withRouter)(({ children, history }) => {
    const dispatch = useDispatch();
    const _children = children as Game;
    return (
        <span
            onClick={() => history.push(`/${_children.slug}`)}
            className="game noblock shadow"
        >
            <div className="center">
                <img className="game-img" src={_children.background_image} />
                <span>
                    <h3 className="noblock">{_children.name}</h3>{" "}
                    <Rating>{_children.rating}</Rating>
                </span>
            </div>
            <span className="right"></span>

            {/* <h4 className="noblock">{props._children.name}</h4>
            <b className="noblock right">{props._children.rating} / 10</b>
                */}
        </span>
    );
});
