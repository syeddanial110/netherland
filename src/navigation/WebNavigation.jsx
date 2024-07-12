import { Container, Grid } from "@mui/material";
import React from "react";
import logo from "../assets/images/Logo 1.png";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import { navigation } from "@/utils/data";
import { NavDropdown } from "react-bootstrap";
import UIButton from "@/components/UIButton/UIButton";

const WebNavigation = () => {
  return (
    <Container>
      <Grid
        container
        gap={3}
        p={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image src={logo} alt="logo" height={30} />
        </Grid>
        <Grid item xs={6} display="flex" gap={4} justifyContent="center">
          {navigation?.length > 0 &&
            navigation?.map((item) => {
              if (item.path) {
                return (
                  <UITypography
                    type="subheading"
                    title={item.title}
                    sx={{
                      fontWeight: 400,
                      fontSize: "18px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                );
              }
              if (item.subLink) {
                return (
                  <NavDropdown
                    title={item.title}
                    id="basic-nav-dropdown"
                    style={{ color: "white !important", fontSize: "18px" }}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                );
              }
            })}
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="flex-end">
          <UIButton btnType="contained" title="Get Pricing" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WebNavigation;
