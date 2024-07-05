import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { SVGs } from '@/constants/Images';
import CustomText from '../CustomText';
import UIButton from '../UIButton/UIButton';

const ContactUsCard = () => {
    return (
        <Container>
            <Grid container marginY={10}>
                <Grid item xs={12} md={6} padding={5} sx={{ borderTopLeftRadius: 25, borderBottomLeftRadius: 25, overflow: 'hidden' }}>
                    <Box display={'flex'} flexDirection={'row'} marginY={6}>
                        <Image src={SVGs.marker} style={{ marginRight: 15 }} />
                        <Box>
                            <CustomText fontWeight={600} text={'Netherlands'} color={'#fff'} fontSize={25} />
                            <CustomText text={'De Ruijterkade 7'} color={'#fff'} fontSize={16} />
                            <CustomText text={'1013 AA Netherlands'} color={'#fff'} fontSize={16} />
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} marginY={6}>
                        <Image src={SVGs.marker} style={{ marginRight: 15 }} />
                        <Box>
                            <CustomText fontWeight={600} text={'Canada'} color={'#fff'} fontSize={25} />
                            <CustomText text={'De Ruijterkade 7'} color={'#fff'} fontSize={16} />
                            <CustomText text={'1013 AA Canada'} color={'#fff'} fontSize={16} />
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} marginY={6}>
                        <Image src={SVGs.marker} style={{ marginRight: 15 }} />
                        <Box>
                            <CustomText fontWeight={600} text={'Dubai'} color={'#fff'} fontSize={25} />
                            <CustomText text={'De Ruijterkade 7'} color={'#fff'} fontSize={16} />
                            <CustomText text={'1013 AA Dubai'} color={'#fff'} fontSize={16} />
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} marginBottom={5}>
                        <Image src={SVGs.phone} style={{ marginRight: 15 }} />
                        <CustomText text={'+971 3465 785'} color={'#fff'} fontSize={16} />
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} marginBottom={5}>
                        <Image src={SVGs.mail} style={{ marginRight: 15 }} />
                        <CustomText text={'Info@opensourceconsulting.com'} color={'#fff'} fontSize={16} />
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                        <Image src={SVGs.fb} style={{ marginRight: 25 }} />
                        <Image src={SVGs.twitter} style={{ marginRight: 25 }} />
                        <Image src={SVGs.vimeo} style={{ marginRight: 25 }} />
                        <Image src={SVGs.youtube} />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    bgcolor={'#282828'}
                    sx={{ borderTopRightRadius: 25, borderBottomRightRadius: 25 }}
                    padding={5}
                >
                    <Box display={'flex'} flexDirection={'row'}>
                        <CustomText fontWeight={600} text={`LET's`} marginRight={1} color={'#fff'} fontSize={35} />
                        <CustomText fontWeight={600} text={`MEET`} color={'#26CB99'} fontSize={35} />
                    </Box>
                    <CustomText
                        text={`We’d like to get to know you. Together we’ll look how we can help you in the best way possible.`}
                        marginRight={1}
                        color={'#fff'}
                        fontSize={16}
                        marginBottom={8}
                    />
                    <Box component={'form'} noValidate marginY={5}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="Can we have your name?"
                            variant="standard"
                            sx={{ width: '100%', color: '#fff', marginBottom: 3 }}
                        />
                        <TextField
                            required
                            id="standard-required"
                            placeholder="And your email?"
                            variant="standard"
                            sx={{ width: '100%', color: '#fff', marginBottom: 3 }}
                        />
                        <TextField
                            required
                            id="standard-multiline-static"
                            placeholder="What would you like to say?"
                            variant="standard"
                            multiline
                            rows={4}
                            sx={{ width: '100%', color: '#fff', marginBottom: 3 }}
                        />
                        <UIButton title={'Send'} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactUsCard;