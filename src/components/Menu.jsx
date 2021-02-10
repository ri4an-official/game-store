import { Nav, Navbar } from "react-bootstrap";

export const Menu = () => (
    <>
        <Navbar expand="lg">
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
                Game Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={`${process.env.PUBLIC_URL}/basket`}>
                        Basket
                    </Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/login`}>
                        Sign In
                    </Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/register`}>
                        Sign Up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);
