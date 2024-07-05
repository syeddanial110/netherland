import React from 'react';
import { Box, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Images, SVGs } from '@/constants/Images';
import CustomText from '../CustomText';

const Footer = () => {
    return (
        <Container>
            <Grid container padding={5} columnSpacing={5}>
                <Grid item xs={12} md={3}>
                    <Image src={Images.logo} style={{ marginBottom: 20 }} />
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} marginBottom={3}>
                        <Image src={SVGs.phone} style={{ marginRight: 10 }} />
                        <CustomText text={'+971 3465 785'} color={'#fff'} fontSize={16} />
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} marginBottom={3}>
                        <Image src={SVGs.mail} style={{ marginRight: 10 }} />
                        <CustomText text={'Info@opensourceconsulting.com'} color={'#fff'} fontSize={16} />
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Image src={SVGs.fb} style={{ marginRight: 30 }} />
                        <Image src={SVGs.twitter} style={{ marginRight: 30 }} />
                        <Image src={SVGs.vimeo} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <CustomText text={'OpenSource Consulting'} color={'#fff'} fontSize={25} marginBottom={5} />
                    <CustomText text={'Who We Are'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Solutions'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Resources'} color={'#fff'} fontSize={16} marginBottom={1} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CustomText text={'Solutions'} color={'#fff'} fontSize={25} marginBottom={5} />
                    <CustomText text={'Consulting Services'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Technical Services'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Migration Services'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Managed Services'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Training Services'} color={'#fff'} fontSize={16} marginBottom={1} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CustomText text={'Resources'} color={'#fff'} fontSize={25} marginBottom={5} />
                    <CustomText text={'Database Platform'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Streaming Data Pipeline'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Unified Observability'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'Kubernetes & Cloud'} color={'#fff'} fontSize={16} marginBottom={1} />
                    <CustomText text={'DevOps & Automation'} color={'#fff'} fontSize={16} marginBottom={1} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;