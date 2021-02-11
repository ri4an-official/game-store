import { Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Basket = (props) => {
    const games = useSelector((state) => state.basket.games);
    return (
        <div className="container">
            <h2>Basket</h2>
            <Table variant="dark">
                {games.map((g) => (
                    <Row>{g}</Row>
                ))}
            </Table>
        </div>
    );
};
