"use client";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Tilt } from "react-tilt";
import UIButton from "../UIButton/UIButton";

const TiltCard = ({ iconImg }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Tilt
      options={defaultOptions}
      style={{
        height: "100%",
        width: "100%",
        background: `linear-gradient(29deg, rgba(38,203,153,0.6) 0%, rgba(0,0,0,1) 100%)`,
        padding: "20px",
      }}
    >
      <Stack gap={1}>
        <Image src={iconImg} alt={"iconImg"} height={40} />
        <h5>Web Development</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet
          fuga et dolor. Ex aspernatur neque similique labore iusto repudiandae
          suscipit rem est saepe id reprehenderit cum molestiae, temporibus vel.
        </p>
        <UIButton isArrow title="View More" />
      </Stack>
    </Tilt>
  );
};

export default TiltCard;
