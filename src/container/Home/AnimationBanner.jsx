"use client";
import React from "react";
import bannerAnim from "../../assets/animation/banner-anim.json";
import Lottie from "lottie-react";

const AnimationBanner = () => {
  return <Lottie animationData={bannerAnim} loop={true} />;
};

export default AnimationBanner;
