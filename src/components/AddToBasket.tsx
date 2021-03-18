import { useDispatch, useSelector } from "react-redux";
import { Game } from "../common/models/Game";
import { addToBasket } from "../common/redux/basket-reducer";
import basket from "../common/images/add-to-cart.svg";
import { State } from "../common/redux/redux-reducer";
export const AddToBasket = ({ children }: { children: Game }) => {
    const dispatch = useDispatch();
    const myGames = useSelector((state: State) => state.login.user.games);

    return !children.isBuy ? ( //! зарефакторь, вынеси это за эту компоненту
        <span
            onClick={
                () => dispatch(addToBasket({ ...children, id: Date.now() })) //! отсутствует свойство price
            }
            className="right cart"
        >
            <img width="100%" height="100%" className="noblock" src={basket} />
        </span>
    ) : (
        <></>
    );
};
