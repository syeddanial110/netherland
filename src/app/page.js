import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import bannerVideo from "../assets/videos/banner-gif.gif";
import UIButton from "@/components/UIButton/UIButton";
import TiltCard from "@/components/Card/TiltCard";
import mySvg from "../assets/icons/svg1.svg";
import { FlipWords } from "@/components/FlipWords/FlipWords";
import { SideScroll } from "@/components/SideScroll/SideScroll";
import CardGrid from "@/components/CardGrid/CardGrid";
import ChooseOpenCard from "@/components/ChooseOpenCard";
import { Container } from "react-bootstrap";
import SupportCard from "@/components/SupportCard";
import MissionCard from "@/components/MissionCard";
import ConfidenceCard from "@/components/ConfidenceCard";
import WithWithoutCard from "@/components/WithWithoutCard";
import PartnerCard from "@/components/PartnerCard";
import HowCard from "@/components/HowCard";
import TechnologyCard from "@/components/TechnologyCard";
import ExperienceCard from "@/components/ExperienceCard";
import PastWorkCard from "@/components/PastWorkCard";
import PowerCard from "@/components/PowerCard";
import ContactUsCard from "@/components/ContactUsCard";
import Footer from "@/components/Footer";
import HomeBanner from "@/container/Home/HomeBanner";

export default function Home() {
  return (
    <>
      {/* <SideScroll>
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
      </Grid> */}
      <Grid container gap={6}>
        <Grid item xs={12}>
          <HomeBanner />
        </Grid>
        <Grid item xs={12} mt={3}>
          <ChooseOpenCard />
        </Grid>
        <Grid item xs={12}>
          <SupportCard />
        </Grid>
        <Grid item xs={12} justifyItems={"center"} display={"grid"}>
          <MissionCard />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "#282828" }}>
          <ConfidenceCard />
        </Grid>
        <Grid item xs={12}>
          <WithWithoutCard />
        </Grid>
        <Grid item xs={12}>
          <PartnerCard />
        </Grid>
        <Grid item xs={12}>
          <HowCard />
        </Grid>
        <Grid item xs={12}>
          <TechnologyCard />
        </Grid>
        <Grid item xs={12}>
          <ExperienceCard />
        </Grid>
        <Grid item xs={12}>
          <PastWorkCard />
        </Grid>
        <Grid item xs={12}>
          <PowerCard />
        </Grid>
        <Grid item xs={12}>
          <ContactUsCard />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "#282828" }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

//#26CB99
//#171717
//#000000
