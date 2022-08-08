import { Container, Nav, Navbar } from "react-bootstrap";

import "./navbar.css";

export const NavbarMain = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#section1">Schraeder-Amores</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="#section1">Home</Nav.Link>
            <Nav.Link href="#section3">About us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#section6">Social Media</Nav.Link>
              <Nav.Link eventKey={2} href="#section7">
                Contact
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
