import React from 'react';
import { Box, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import { SVGs } from '@/constants/Images';
import Image from 'next/image';
import CustomText from '../CustomText';

const data = [
    {
        id: 1,
        icon: SVGs.nearshore,
        title: 'NEARSHORE',
    },
    {
        id: 2,
        icon: SVGs.outsourcing,
        title: 'OUTSOURCING',
    },
    {
        id: 3,
        icon: SVGs.services,
        title: 'MANAGE SERVICES',
    },
    {
        id: 4,
        icon: SVGs.turnkey,
        title: 'TURNKEY PROJECTS',
    },
];

const HowCard = () => {
    return (
        <Container>
            <Box
                sx={{ display: 'flex', justifyContent: 'center' }}
                xs={6}
                md={12}
                marginTop={10}
                marginBottom={5}
            >
                <p>HOW WE DO IT</p>
            </Box>
            <Grid container marginY={3}>
                {data.map(val => (
                    <Grid item key={val.id} xs={6} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src={val.icon} style={{ marginBottom: 10, marginRight: 5 }} />
                            <Box sx={{ borderBottomWidth: 1, width: '70%', borderStyle: 'dashed' }} />
                        </Box>
                        <CustomText text={val.title} fontSize={25} fontWeight={700} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HowCard;