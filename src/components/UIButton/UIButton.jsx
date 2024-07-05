import React from "react";
import "./button.css";
import { Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { UIStyledContainedButton, UIStyledIconButton } from "./ui";

const UIButton = ({ title, btnType, isArrow }) => {
  return (
    <>
      {btnType == "contained" ? (
        <UIStyledContainedButton>{title}</UIStyledContainedButton>
      ) : (
        <UIStyledIconButton>{title}</UIStyledIconButton>
      )}
    </>
  );
};

export default UIButton;
