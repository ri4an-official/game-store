import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const Game = ({ children, setId }) => {
    const dispatch = useDispatch();
    return (
        <div onClick={setId} className="game shadow">
            <h2 className="noblock">{children.title}</h2>
            <b className="noblock right">{children.price} руб.</b>
            <div>
                <Button
                    onClick={() => dispatch(add({ ...children }))}
                    className="right" variant="light"
                >
                    <img src={basket} />
                </Button>
            </div>
        </div>
    );
};
