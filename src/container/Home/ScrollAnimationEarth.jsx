"use client";

import React, { useEffect, useRef } from "react";
import earthImg from "../../assets/images/earth.png";
import { Box } from "@mui/material";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { UIFlowBox } from "./ui";
import UITypography from "@/components/UITypography/UITypography";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationEarth = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".earthImg",
        markers: false,
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
      },
    });
    let tlBox = gsap.timeline({
      scrollTrigger: {
        trigger: ".earthImg",
        markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
      },
    });

    tl.to(".earthImg", {
      rotate: 45,
      duration: 2,
    })
      .to(".earthImg", { rotate: 90, duration: 1 })
      .to(".earthImg", { rotate: 180, duration: 1 })
      .to(".earthImg", { rotate: 240, duration: 1 })
      .to(".earthImg", { rotate: 360, duration: 1 });

    tlBox
      .fromTo(".box1", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box2", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box3", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box4", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box5", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box6", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box7", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box8", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box9", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box10", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".box11", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
      className="mainBox"
    >
      <Box
        sx={{
          //   position: "fixed",
          //   top: 0,
          width: "100%",
          height: "500px",
        }}
      >
        <Image
          src={earthImg}
          alt="earthImg"
          id="leftgear"
          className="earthImg"
          style={{ height: "500px", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 50,
          left: 50,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "500px",
        }}
      >
        <UIFlowBox className="box1">
          <UITypography
            type="subheading"
            title="Initiation"
            textAlign="center"
          />
        </UIFlowBox>
        <UIFlowBox className="box2">
          <UITypography type="subheading" title="Planning" textAlign="center" />
        </UIFlowBox>
        <UIFlowBox className="box3">
          <UITypography
            type="subheading"
            title="Execution"
            textAlign="center"
          />
        </UIFlowBox>
        <UIFlowBox className="box4">
          <UITypography
            type="subheading"
            title="Controlling"
            textAlign="center"
          />
        </UIFlowBox>
        <UIFlowBox className="box5">
          <UITypography type="subheading" title="Closing" textAlign="center" />
        </UIFlowBox>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 50,
          right: 50,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "500px",
          alignItems: "center",
        }}
      >
        <UIFlowBox className="box6">
          <UITypography type="subheading" title="Delivery" textAlign="center" />
        </UIFlowBox>
        <UIFlowBox className="box7">
          <UITypography type="subheading" title="Testing" textAlign="center" />
        </UIFlowBox>
        <Box display="flex" gap={3}>
          <UIFlowBox className="box8">
            <UITypography type="subheading" title="Design" textAlign="center" />
          </UIFlowBox>
          <UIFlowBox className="box9">
            <UITypography
              type="subheading"
              title="Feedback"
              textAlign="center"
            />
          </UIFlowBox>
        </Box>
        <UIFlowBox className="box10">
          <UITypography type="subheading" title="Planning" textAlign="center" />
        </UIFlowBox>
        <UIFlowBox className="box11">
          <UITypography type="subheading" title="Envision" textAlign="center" />
        </UIFlowBox>
      </Box>
    </Box>
  );
};

export default ScrollAnimationEarth;
