import React from 'react';
import { Box, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import CustomText from '../CustomText';
import { SVGs } from '@/constants/Images';
import Image from 'next/image';

const data = [
    {
        id: 1,
        icon: SVGs.experience,
        title: `30+`,
        desc: `Years Experience`,
    },
    {
        id: 2,
        icon: SVGs.countries,
        title: `03`,
        desc: `Countries`,
    },
    {
        id: 3,
        icon: SVGs.projects,
        title: `150`,
        desc: `Projects`,
    },
    {
        id: 4,
        icon: SVGs.growth,
        title: `80%`,
        desc: `Yearly Growth`,
    },
];

const ExperienceCard = () => {
    return (
        <Box sx={{ backgroundColor: '#282828', paddingY: 6 }}>
            <Container>
                <Grid display={'flex'} container justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={3}>
                        <CustomText text={'COMBINED'} fontSize={30} fontWeight={600} color={'#fff'} />
                        <CustomText text={'INDUSTRY'} fontSize={30} fontWeight={600} color={'#26CB99'} />
                        <CustomText text={'EXPERIENCE'} fontSize={30} fontWeight={600} color={'#fff'} />
                    </Grid>
                    {data.map(val => (
                        <Grid item xs={12} md={2} key={val.id}>
                            <Image src={val.icon} width={50} height={50} />
                            <CustomText text={val.title} fontWeight={600} fontSize={22} marginTop={1} />
                            <CustomText text={val.desc} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ExperienceCard;