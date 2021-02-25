import { Game } from "../../common/models/Game";
import { Rating } from "../Rating";
import { compose } from "redux";
import { withRouter } from "react-router";
import { AddToBasket } from "../AddToBasket";
export const GameItem = compose(withRouter)(({ children, history }) => {
    const _children = children as Game;
    return (
        <span
            onClick={() => history.push(`/games/${_children.slug}`)}
            className="game noblock shadow"
        >
            <div className="center">
                <img className="game-img" src={_children.background_image} />
                <span>
                    <Rating>{_children.rating}</Rating>
                    <h3 className="noblock">{_children.name}</h3>
                    <AddToBasket>{_children}</AddToBasket>
                </span>
            </div>
        </span>
    );
});
