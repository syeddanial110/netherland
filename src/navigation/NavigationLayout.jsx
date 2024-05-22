"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationLayout({ children }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" style={{ color: "white" }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ color: "white" }}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" style={{ color: "white" }}>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ color: "white" }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes" style={{ color: "white" }}>
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationLayout;
