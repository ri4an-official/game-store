import { Game } from "../../common/models/Game";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
import { Money } from "../Money";
export const GameItem = ({ children }: { children: Game }) => {
    const dispatch = useDispatch();
    const n = children.name;
    return (
        <Link to={`/games/${children.slug}`} className="game noblock shadow">
            <img className="game-img" src={children.background_image} />
            <span>
                <h3 className="noblock game-name">
                    {n.length <= 16 ? n : n.substring(0, 16) + "..."}
                </h3>
                <Rating>{children.rating}</Rating>
                <Money>{children.price}</Money>
                <span
                    onClick={() =>
                        dispatch(addToBasket({ ...children, id: Date.now() }))
                    }
                    className="right cart noblock"
                >
                    <img className="noblock cart" src={basket} />
                </span>
            </span>
        </Link>
    );
};
