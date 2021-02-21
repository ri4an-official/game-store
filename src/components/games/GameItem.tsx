import { useDispatch } from "react-redux";
import { Game } from "../../common/models/Game";
import { addToBasket } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";

export const GameItem = (props: { setId: () => void; children: Game; }) => {
    const dispatch = useDispatch();
    return (
        <div onClick={props.setId} className="game shadow">
            <h4 className="noblock">{props.children.name}</h4>
            <b className="noblock right">{props.children.rating} / 10</b>
            <div
                onClick={() => dispatch(
                    addToBasket({
                        ...props.children,
                        id: Date.now(),
                    })
                )}
            >
                <img className="right" src={basket} />
                <h3 className="noblock right">+</h3>
            </div>
        </div>
    );
};
