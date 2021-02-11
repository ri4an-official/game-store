import { Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Basket = () => {
    const games = useSelector((state) => state.basket.games);
    return (
        <div className="container">
            <h2>Basket</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {games.map((g) => (
                        <tr>
                            <td>{g.id}</td>
                            <td>{g.title}</td>
                            <td>{g.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
