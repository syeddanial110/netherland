"use client";

import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const UIStyledContainedButton = styled(Button)(({ theme, isDark }) => ({
  backgroundColor: theme.palette.primary.main,
  color: `${theme.palette.primary.whiteShade} !important`,
  borderRadius: "10px",
  fontSize: "16px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: theme.palette.primary.whiteShade,
    color: `${theme.palette.primary.main} !important`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const UIStyledIconButton = styled(Button)(({ theme, isDark }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  borderRadius: "10px",
  fontSize: "16px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: theme.palette.primary.greyShade1,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
