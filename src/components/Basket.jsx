import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
export const Basket = compose(withRouter)(() => {
    const games = useSelector((state) => state.basket.games);
    return (
        <div className="container">
            <h2>Basket</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
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
});
