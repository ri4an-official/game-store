import { Nav, Navbar } from "react-bootstrap";

export const Menu = () => (
    <>
        <Navbar expand="lg">
            <Navbar.Brand href="/game-store/">Game Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/game-store/basket">Basket</Nav.Link>
                    <Nav.Link href="/game-store/login">Sign In</Nav.Link>
                    <Nav.Link href="/game-store/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);