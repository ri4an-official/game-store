import { useDispatch } from "react-redux";
import { add } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const Game = ({ children, setId }) => {
    const dispatch = useDispatch();
    return (
        <div onClick={setId} className="game shadow">
            <h4 className="noblock">{children.name}</h4>
            <b className="noblock right">{children.rating} / 10</b>
            <div>
                <img
                    onClick={() => dispatch(add({ ...children }))}
                    className="right"
                    src={basket}
                />
            </div>
        </div>
    );
};
