import React from "react";
import CustomText from "../CustomText";
import { Box, Container, Grid } from "@mui/material";
import { SVGs } from "@/constants/Images";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: SVGs.magnifier,
    title: `Full Lifecycle${`\n`}Support`,
    description: `From planning and integration, to EoL support and migration, OpenSource Consulting can support entire lifecycle of your adopted open source.`,
  },
  {
    id: 2,
    image: SVGs.addBlocks,
    title: `One Vendor,${`\n`}Everything Open`,
    description: `OpenSource Consulting supports 400+ open source packages. Enjoy simplified vendor management and support with no finger pointing.`,
  },
  {
    id: 3,
    image: SVGs.people,
    title: `Community${`\n`}Commitment`,
    description: `We contribute to the open source projects we support, with 50+ contributions/year — including official CentOS images for Azure.`,
  },
  {
    id: 4,
    image: SVGs.download,
    title: `On Prem,${`\n`}Any Cloud`,
    description: `No matter where you deploy, OpenSource Consulting can help support and improve your open source infrastructure.`,
  },
  {
    id: 5,
    image: SVGs.mechanic,
    title: `Tool${`\n`}Agnostic`,
    description: `Unlike commercial support vendors, OpenSource Consulting will always recommend the packages that best fit your goals.`,
  },
  {
    id: 6,
    image: SVGs.labor,
    title: `Experienced${`\n`}Architects`,
    description: `Our team of enterprise architects average 15 years of hands-on experience with large-scale, complex open source implementations.`,
  },
];

const ChooseOpenCard = () => {
  return (
    <Container maxWidth='lg' >
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        xs={6}
        md={12}
      >
        <CustomText
          text={"WHY CHOOSE"}
          fontSize={{ xs: '22px', md: "35px" }}
          marginRight={1.5}
          fontWeight={600}
        />
        <CustomText
          text={"OPEN SOURCE?"}
          fontSize={{ xs: '22px', md: "35px" }}
          color={"#26CB99"}
          fontWeight={600}
        />
      </Box>
      <CustomText
        text={`OpenSource acts as your trusted advisor, helping you reach${`\n`}OSS maturity and achieve business goals.`}
        textAlign={"center"}
        whiteSpace={"pre-line"}
        fontSize={18}
        marginBottom={5}
      />
      <Grid container display={"flex"} justifyContent="center" rowSpacing={5}>
        {data.map((val) => (
          <Grid item xs={6} md={4} key={val.id}>
            <Image
              src={val.image}
              width={60}
              height={60}
              style={{ marginBottom: 15 }}
            />
            <CustomText
              text={val.title}
              fontSize={{ xs: '16px', md: "24px" }}
              whiteSpace={"pre-line"}
              fontWeight={600}
              marginBottom={1}
            />
            <CustomText text={val.description} width={"80%"} fontSize={15} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ChooseOpenCard;
