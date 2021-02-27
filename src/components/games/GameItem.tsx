import { Game } from "../../common/models/Game";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const GameItem = ({ children }: { children: Game }) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/games/${children.slug}`} className="game noblock shadow">
            <img className="game-img" src={children.background_image} />
            <span>
                <Rating>{children.rating}</Rating>
                <h4 className="noblock game-name">{children.name}</h4>
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
