import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../common/redux/basket-reducer";
import basket from "../../common/images/add-to-cart.svg";
export const Game = ({ children, setId }) => {
    const dispatch = useDispatch();
    return (
        <div onClick={setId} className="game shadow">
            <h4 className="noblock">{children.name}</h4>
            <b className="noblock right">{children.rating} руб.</b>
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
