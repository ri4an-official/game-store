import { Button } from "react-bootstrap"
import { withRedirect } from "../common/hocs/withRedirect"
import { Title } from "./Title"
import bin from "./../common/images/free-icon-dustbin-4205487.svg"
import { Money } from "./Money"
import { useStore } from "effector-react"
import { $currentUser, buyGames } from "../common/models/login"
import { $cart, deleteGame } from "../common/models/cart"

export default withRedirect(() => {
    const games = useStore($cart)
    const user = useStore($currentUser)
    return (
        <div className="container basket">
            <Title noblock>Cart</Title>
            <h5 className="noblock right green">
                <Money>{user.sum}</Money>
            </h5>
            {!games.length ? (
                <h4 className="center red">Cart's empty</h4>
            ) : (
                <>
                    {games.map((g) => (
                        <>
                            <div className="item shadow ">
                                <h3 className="noblock">{g.name}</h3>
                                <img
                                    className="btn right noblock btn-danger"
                                    onClick={() => deleteGame(g.id)}
                                    src={bin}
                                />
                                <Money className="right">{g.price}</Money>
                            </div>
                            <p />
                        </>
                    ))}
                    <Button
                        className="right"
                        variant="success"
                        onClick={() => buyGames(games)}
                    >
                        + Buy
                    </Button>
                </>
            )}
        </div>
    )
})
