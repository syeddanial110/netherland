import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AnimationBanner from "./AnimationBanner";

const HomeBanner = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <Box
            sx={{
              height: "80vh",
              width: "90%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <AnimationBanner />
          </Box>
          <Box
            sx={{ position: "absolute", bottom: 30, left: 50, width: "60%" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "30px", md: "50px" },
                textTransform: "uppercase",
              }}
            >
              Unlocking the Power of{" "}
              <span style={{ color: "#26CB99" }}>Open Source</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBanner;
