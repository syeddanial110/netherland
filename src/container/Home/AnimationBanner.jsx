"use client";

import React from "react";
import Image from "next/image";
import bannerImg from "../../assets/images/banner.svg";
import bannerAnim from "../../assets/animation/banner-anim-3.json";
import { Box } from "@mui/material";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.svg";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.webp";
import img10 from "../../assets/images/img10.webp";
import img11 from "../../assets/images/img11.webp";
import img12 from "../../assets/images/img12.webp";
import img13 from "../../assets/images/img13.png";
import img14 from "../../assets/images/img14.png";
import img15 from "../../assets/images/img15.png";
import img16 from "../../assets/images/img16.png";
import { useEffect } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";

const AnimationBanner = () => {
  useEffect(() => {
    var tl = gsap.timeline({ repeat: Infinity, repeatDelay: 30 });
    tl.fromTo(".img1", { opacity: 1, duration: 2 }, { opacity: 0, duration: 2 })
      .fromTo(".img4", { opacity: 1, duration: 4 }, { opacity: 0, duration: 4 })
      .fromTo(
        ".img7",
        { opacity: 0, duration: 6 },
        { opacity: 1, duration: 6 }
      );

    // tl.to(".img2", { y: 50, duration: 1 });
    // tl.to(".img3", { opacity: 0, duration: 1 });
  }, []);

  return (
    <Box>
      <Lottie animationData={bannerAnim} loop={true} style={{height: "80%", width: "100%"}} />
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Image
          src={bannerImg}
          alt="bannerimg"
          height={240}
          style={{
            width: 480,
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          position: "absolute",
          top: 20,
          left: "50%",
        }}
      >
        <Box
          sx={{
            height: 50,
            width: 50,
            background: "white",
            marginLeft: "60px",
            position: "relative",
          }}
          className="box"
        >
          <Image
            src={img1}
            alt="img1"
            className="img1"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
          <Image
            src={img4}
            alt="img4"
            className="img4"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
          <Image
            src={img7}
            alt="img7"
            className="img7"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
          <Image
            src={img10}
            alt="img10"
            className="img10"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
          <Image
            src={img13}
            alt="img13"
            className="img13"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
          <Image
            src={img16}
            alt="img16"
            className="img16"
            style={{ position: "absolute", top: 0, opacity: 0 }}
          />
        </Box>
        <Box
          sx={{
            height: 90,
            width: 70,
            background: "white",
          }}
          className="box"
        >
          <Image src={img2} alt="img2" className="img2" />
          <Image src={img5} alt="img5" className="img5" />
          <Image src={img8} alt="img8" className="img8" />
          <Image src={img11} alt="img11" className="img11" />
          <Image src={img14} alt="img14" className="img14" />
          <Image src={img1} alt="img1" className="img1" />
        </Box>
        <Box
          sx={{
            height: 50,
            width: 50,
            background: "white",
            marginLeft: "30px",
          }}
          className="box"
        >
          <Image src={img3} alt="img3" className="img3" />
          <Image src={img6} alt="img6" className="img6" />
          <Image src={img9} alt="img9" className="img9" />
          <Image src={img12} alt="img12" className="img12" />
          <Image src={img15} alt="img15" className="img15" />
          <Image src={img2} alt="img2" className="img2" />
        </Box>
      </Box> */}
    </Box>
  );
};

export default AnimationBanner;
