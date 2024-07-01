import React from 'react';
import { Box, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Images } from '@/constants/Images';
import CustomText from '../CustomText';

const WithWithoutCard = () => {
    return (
        <Container>
            <Grid container marginY={5} rowGap={6}>
                <Grid item xs={12} md={12} className='backImage'
                    // sx={{
                    //     backgroundImage: `url(${Images.earthImage})`,
                    //     backgroundSize: 'cover',
                    //     backgroundRepeat: 'no-repeat',
                    //     backgroundPosition: 'center'
                    // }}
                >
                    {/* <Image src={Images.earthImage} layout="responsive" /> */}
                    <Box>
                        <CustomText text={'WITHOUT'} />
                        <CustomText text={'OPENSOURCE'} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WithWithoutCard;