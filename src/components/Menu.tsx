import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../common/redux/redux-reducer";
import basket from "./../common/images/free-icon-shopping-4220891.svg";
import profile from "./../common/images/profile.svg";
export const Menu = () => {
    const { auth, username } = useSelector((state: State) => state.login);
    //prettier-ignore
    const countGamesInBasket = useSelector((state: State) => state.basket.games.length);
    return (
        <>
            <Navbar expand="lg" sticky="top" className="container">
                <Link data-toggle="tab" className="navbar-brand" to="/">
                    Game store
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link
                                data-toggle="tab"
                                className="nav-link"
                                to="/basket"
                            >
                                <img src={basket} /> Basket{" "}
                                <span className="count">
                                    {countGamesInBasket
                                        ? countGamesInBasket
                                        : null}
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {!auth ? (
                                <Link
                                    data-toggle="tab"
                                    className="nav-link"
                                    to="/login"
                                >
                                    Sign In
                                </Link>
                            ) : (
                                <div className="nav-item right">
                                    <img src={profile} />
                                    <b>{username}</b>
                                </div>
                            )}
                        </li>

                        {/* <Nav.Link href="/register">Register</Nav.Link> */}
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
