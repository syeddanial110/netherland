import React from "react";
import "./button.css";
import { Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const UIButton = ({ title, isVideoIcon, isArrow }) => {
  return (
    <Button
      className={`${isVideoIcon ? "videoBtn" : "arrowBtn"}`}
      endIcon={
        isVideoIcon ? <PlayCircleIcon /> : isArrow ? <TrendingFlatIcon className="arrowIcon" /> : ""
      }
    >
      {title}
    </Button>
  );
};

export default UIButton;
