import { Images } from '@/constants/Images';
import { Box } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import CustomText from '../CustomText';

const data = [
    {
        id: 1,
        bgImage: Images.DataMonitoring,
        title: 'Observability & Data Monitoring',
    },
    {
        id: 2,
        bgImage: Images.softwareDevelopment,
        title: 'Software Development',
    },
    {
        id: 3,
        bgImage: Images.machineLearning,
        title: 'Data, machine learning & Ai',
    },
    {
        id: 4,
        bgImage: Images.ItManagement,
        title: 'IT Management',
    },
    {
        id: 5,
        bgImage: Images.DevOps,
        title: 'DevOps',
    },
    {
        id: 6,
        bgImage: Images.digital,
        title: 'Digital Transformation',
    },
    {
        id: 7,
        bgImage: Images.subcription,
        title: 'Software Subscription',
    },
];

const TechnologyCard = () => {
    return (
        <Container>
            <Box
                sx={{ display: 'flex', justifyContent: 'center' }}
                xs={6}
                md={12}
                marginTop={10}
                marginBottom={5}
            >
                <CustomText text={'TECHNOLOGIES WE'} marginRight={1} color={'#fff'} fontSize={30} fontWeight={600} />
                <CustomText text={'DEAL IN'} color={'#26CB99'} fontSize={30} fontWeight={600} />
            </Box>
        </Container>
    );
};

export default TechnologyCard;