import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Menu = () => {
    const login = useSelector((state) => state.login);
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Game Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/basket">Basket</Nav.Link>
                        {login.auth ? (
                            <Nav.Link href="/login" className="right">
                                Sign In
                            </Nav.Link>
                        ) : (
                            login.username
                        )}
                        {/* <Nav.Link href="/register">Register</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
