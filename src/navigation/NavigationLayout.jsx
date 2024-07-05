"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/Logo 1.png";
import Image from "next/image";
import { Grid } from "@mui/material";
import WebNavigation from "./WebNavigation";
import MobileNavigation from "./MobileNavigation";
import NavigationNavbar from "./NavigationNavbar";

function NavigationLayout({ children }) {
  return (
    <>
      <Grid container>
        {/* <Grid item xs={12}>
          <NavigationNavbar />
        </Grid> */}
        <Grid item md={12} sx={{ display: { xs: "none", md: "block" } }}>
          <WebNavigation />
        </Grid>
        <Grid item md={12} sx={{ display: { xs: "block", md: "none" } }}>
          <MobileNavigation />
        </Grid>
      </Grid>
    </>
  );
}

export default NavigationLayout;
