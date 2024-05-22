import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import lifeCycleIcon from "../../assets/images/lifeCycleIcon.svg";
import Image from "next/image";

const CardGrid = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Stack gap={2}>
          <Image
            src={lifeCycleIcon}
            alt="lifeCycleIcon"
            height={60}
            style={{ display: "flex", justifyContent: "center" }}
          />
          <Typography textAlign="center">Continuous Exploration</Typography>
          <Typography textAlign="center">
            A process that drives innovation and fosters alignment on what
            should be built by continually exploring the market and customer
            needs, and defining a Vision, Roadmap, set of features and services
            for a solution that addresses those needs
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default CardGrid;
