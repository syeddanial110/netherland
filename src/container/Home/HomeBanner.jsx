import UITypography from "@/components/UITypography/UITypography";
import { Grid, Typography } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={6} display="flex">
          <Typography
            variant="h1"
            sx={{ fontSize: "50px", textTransform: "uppercase" }}
          >
            Unlocking the Power of{" "}
            <span style={{ color: "#26CB99" }}>Open Source</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBanner;
