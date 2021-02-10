import { Nav, Navbar } from "react-bootstrap";

export const Menu = () => (
    <>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Game Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/basket">Basket</Nav.Link>
                    <Nav.Link href="/login">Sign In</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);
