import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/Logo 1.png";
import UITypography from "@/components/UITypography/UITypography";
import { Box } from "@mui/material";
import UIButton from "@/components/UIButton/UIButton";

const NavigationNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Navbar.Brand href="#home">
          {" "}
          <Image src={logo} alt="logo" height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="icon-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <UITypography
                type="subheading"
                title="About Us"
                sx={{
                  fontWeight: 400,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Nav.Link>
            <NavDropdown
              title="Solutions"
              id="basic-nav-dropdown"
              className="btn-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Resources"
              id="basic-nav-dropdown"
              className="btn-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              <UITypography
                type="subheading"
                title="Contact us"
                sx={{
                  fontWeight: 400,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <UIButton btnType="contained" title="Get Pricing" />
        </Box>
      </Container>
    </Navbar>
  );
};

export default NavigationNavbar;
