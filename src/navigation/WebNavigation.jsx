"use client";

import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import logo from "../assets/images/Logo 1.png";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import { navigation } from "@/utils/data";
import { NavDropdown } from "react-bootstrap";
import UIButton from "@/components/UIButton/UIButton";
import Dropdown from "react-multilevel-dropdown";

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
        <Grid
          item
          xs={6}
          display="flex"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
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
                  <Dropdown
                    title={item.title}
                    menuClassName="subnameDropdown"
                    buttonClassName="dropdownButton dropDownMenu"
                  >
                    <Box sx={{ width: "100%", padding: "10px 20px" }}>
                      <Grid container gap={2}>
                        <Grid item xs={5}>
                          <Stack gap={1}>
                            {item.subLink.map((elm) => {
                              return (
                                <UITypography
                                  type="mainDescription"
                                  title={elm.title}
                                />
                              );
                            })}
                            {item.subLink.map((elm) => {
                              return (
                                <UITypography
                                  type="mainDescription"
                                  title={elm.title}
                                />
                              );
                            })}
                          </Stack>
                        </Grid>
                        <Grid item xs={5}>
                          <Stack gap={1}>
                            {item.subLink.map((elm) => {
                              return (
                                <UITypography
                                  type="mainDescription"
                                  title={elm.title}
                                />
                              );
                            })}
                            {item.subLink.map((elm) => {
                              return (
                                <UITypography
                                  type="mainDescription"
                                  title={elm.title}
                                />
                              );
                            })}
                            {item.subLink.map((elm) => {
                              return (
                                <UITypography
                                  type="mainDescription"
                                  title={elm.title}
                                />
                              );
                            })}
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Dropdown>
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
