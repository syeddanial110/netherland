import React from 'react';
import { Grid } from '@mui/material';
import CustomText from '../CustomText';
import { SVGs } from '@/constants/Images';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const data = [
    {
        id: 1,
        image: SVGs.DataDrivenIcon,
        title: `Providing you with an approach Data-driven based Open Source`
    },
    {
        id: 2,
        image: SVGs.adoptionIcon,
        title: `Accelerating your process of adopting Open Source technologies`
    },
    {
        id: 3,
        image: SVGs.technologyIcon,
        title: `Supporting your technologies, ensuring continuity for your business`
    },
    {
        id: 4,
        image: SVGs.scalableIcon,
        title: `Making your open source technologies scalable and enterprise-ready`
    },
    {
        id: 5,
        image: SVGs.continuityIcon,
        title: `Supporting your technologies, ensuring continuity for your business`
    },
    {
        id: 6,
        image: SVGs.cloudIcon,
        title: `Managing your Open Source technologies in the cloud, in No Lock-in mode`
    },
];

const MissionCard = () => {
    return (
        <Container>
            <CustomText text={'OUR MISSION'} fontSize={48} marginRight={1.5} fontWeight={600} />
            <Grid container marginY={5} rowGap={6}>
                {data.map(val => (
                    <Grid item xs={6} md={4} key={val.id} sx={{ backgroundColor: '#282828', padding: 8 }}>
                        <Image src={val?.image} style={{ marginBottom: 50 }} width={100} height={100} />
                        <CustomText text={val?.title} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MissionCard;