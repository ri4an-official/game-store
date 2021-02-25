import { useDispatch } from "react-redux";
import { Game } from "../common/models/Game";
import { addToBasket } from "../common/redux/basket-reducer";
import basket from "../common/images/add-to-cart.svg";

export const AddToBasket = ({ children }: { children: Game }) => {
    const dispatch = useDispatch();
    return (
        <span
            onClick={() =>
                dispatch(addToBasket({ ...children, id: Date.now() }))
            }
            className="right cart noblock"
        >
            <h4 className="noblock">+</h4>
            <img className="noblock" src={basket} />
        </span>
    );
};
