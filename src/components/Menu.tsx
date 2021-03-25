import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../common/redux/redux-reducer";
import basket from "./../common/images/free-icon-shopping-4220891.svg";
import profile from "./../common/images/profile.svg";
export const Menu = () => {
    const { auth, user } = useSelector((state: State) => state.login);
    const countGamesInBasket = useSelector(
        (state: State) => state.basket.games.length
    );
    return (
        <>
            <Navbar expand="lg" className="container navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-tabs" role="tablist">
                        <Nav.Item>
                            <Link className="navbar-brand" to="/">
                                Game Store
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/cart">
                                <img src={basket} /> <span>Cart </span>
                                <span className="count">
                                    {countGamesInBasket || null}
                                </span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            {!auth ? (
                                <Link className="nav-link" to="/login">
                                    Sign In
                                </Link>
                            ) : (
                                <Link to="/profile" className="nav-link">
                                    <img src={profile} />
                                    <b>{user.name}</b>
                                </Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
