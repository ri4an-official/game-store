import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Menu = () => {
    const login = useSelector((state) => state.login);
    return (
        <>
            <Navbar expand="lg">
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
                                Basket
                            </Link>
                        </li>
                        <li className="nav-item">
                            {!login.auth ? (
                                <Link
                                    data-toggle="tab"
                                    className="nav-link"
                                    to="/login"
                                >
                                    Sign In
                                </Link>
                            ) : (
                                <b>login.username</b>
                            )}
                        </li>

                        {/* <Nav.Link href="/register">Register</Nav.Link> */}
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
