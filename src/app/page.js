import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import bannerVideo from "../assets/videos/banner-gif.gif";
import UIButton from "@/components/UIButton/UIButton";
import TiltCard from "@/components/Card/TiltCard";
import mySvg from "../assets/icons/svg1.svg";
import { FlipWords } from "@/components/FlipWords/FlipWords";
import { SideScroll } from "@/components/SideScroll/SideScroll";
import CardGrid from "@/components/CardGrid/CardGrid";

export default function Home() {
  return (
    <>
      <SideScroll>
        <Grid
          container
          sx={{ minHeight: "90vh" }}
          alignItems="center"
          justifyContent="space-evenly"
          gap={3}
        >
          <Grid item xs={4}>
            <h4>
              Lets <FlipWords words={["Create", "This"]} />
            </h4>
            <h3>Transform Your Business</h3>
            <p>
              <span style={{ color: "#26CB99" }}>#Exciting News</span>
              Simelabs expands with a New Development Center in Kochi!
              Demonstrating our dedication to innovation and client
              satisfaction, this strategic move enhances our ability to deliver
              cutting-edge technologies and unmatched services globally
            </p>
            <UIButton title="Watch Video" isArrow />
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              background: `linear-gradient(to bottom, rgb(0 0 0 /50%), rgb(0 0 0 / 0%)), url('${bannerVideo.src}')`,
              width: "100px",
              height: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
        </Grid>
      </SideScroll>
      <Grid container mt={6} gap={3} justifyContent="center">
        <Grid item xs={3}>
          <TiltCard iconImg={mySvg} />
        </Grid>
        <Grid item xs={3}>
          <TiltCard iconImg={mySvg} />
        </Grid>
        <Grid item xs={3}>
          <TiltCard iconImg={mySvg} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <CardGrid />
        </Grid>
      </Grid>
    </>
  );
}

//#26CB99
//#171717
//#000000
