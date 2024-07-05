import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import CustomText from "../CustomText";
import Image from "next/image";
import { SVGs } from "@/constants/Images";
// import { Swiper, SwiperSlide } from 'swiper/react';

const PastWorkCard = () => {
  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        xs={6}
        md={12}
        marginTop={10}
        marginBottom={10}
      >
        <CustomText
          text={"PAST WORK"}
          marginRight={1}
          color={"#fff"}
          fontSize={30}
          fontWeight={600}
        />
        <CustomText
          text={"EXPERIENCE"}
          color={"#26CB99"}
          marginRight={1}
          fontSize={{ xs: 18, md: 30 }}
          fontWeight={600}
        />
        <CustomText
          text={"AND"}
          marginRight={1}
          color={"#fff"}
          fontSize={{ xs: 18, md: 30 }}
          fontWeight={600}
        />
        <CustomText
          text={"CLIENTS"}
          color={"#26CB99"}
          fontSize={{ xs: 18, md: 30 }}
          fontWeight={600}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
        xs={6}
        md={12}
      >
        <CustomText
          text={"Success Stories"}
          marginRight={1}
          color={"#fff"}
          fontSize={30}
          fontWeight={600}
        />
        <Image src={SVGs.rightArrow} width={18} height={18} />
      </Box>
      {/* <Grid container>

            </Grid> */}
      {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log('swiper', swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
    </Container>
  );
};

export default PastWorkCard;
