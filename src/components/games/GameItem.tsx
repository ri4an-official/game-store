import { Game } from "../../common/models/Game";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const GameItem = ({ children }: { children: Game }) => {
    const dispatch = useDispatch();
    const n = children.name;
    return (
        <Link to={`/games/${children.slug}`} className="game noblock shadow">
            <img className="game-img" src={children.background_image} />
            <span>
                <Rating>{children.rating}</Rating>
                <h3 className="noblock game-name">
                    {n.length <= 17 ? n : n.substring(0, 17) + "..."}
                </h3>
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
const Name = ({ children }: { children: string }) => {
    const length = children.length;
    if (length > 30) return <b className="noblock game-name">{children}</b>;
    if (length >= 25) return <b className="noblock game-name">{children}</b>;
    if (length >= 20) return <h5 className="noblock game-name">{children}</h5>;
    if (length >= 13) return <h4 className="noblock game-name">{children}</h4>;
    else return <h3 className="noblock game-name">{children}</h3>;
};
