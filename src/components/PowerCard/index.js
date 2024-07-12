import React from 'react'
import { Grid } from '@mui/material'
import { Container } from 'react-bootstrap'
import CustomText from '../CustomText'
import UIButton from '../UIButton/UIButton'
import { Images } from '@/constants/Images'
import newsletterImg from '../../assets/images/newsletter.png'
import webinarImg from '../../assets/images/webinar.png'
import videoImg from '../../assets/images/video.png'
import blogImg from '../../assets/images/blog.png'

const data = [
  {
    id: 1,
    bgImage: newsletterImg,
    title: `Newsletter`,
  },
  {
    id: 2,
    bgImage: webinarImg,
    title: `Webinar`,
  },
  {
    id: 3,
    bgImage: videoImg,
    title: `Video`,
  },
  {
    id: 4,
    bgImage: blogImg,
    title: `Blog`,
  },
]

const PowerCard = () => {
  return (
    <Container>
      <Grid
        container
        marginY={10}
        columnGap={2}
        sx={{ backgroundColor: '#282828', padding: 6, borderRadius: 4 }}
      >
        <Grid item xs={12} md={5.5}>
          <CustomText
            text={'Get the Power of OpenSource Today'}
            color={'#fff'}
            fontSize={30}
            fontWeight={600}
            marginBottom={2}
          />
          <CustomText
            text={`Learn more about how our solutions will help you innovate at scale achieve higher quality, strengthen security, and accelerate velocity.`}
            color={'#fff'}
            whiteSpace={'pre-line'}
            fontSize={16}
            marginBottom={2}
          />
          <UIButton
            btnType="contained"
            title={`Schedule a free consultation`}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          //   display="flex"
          //   flexDirection="column"
          //   justifyContent="space-between"
        >
          <CustomText
            text={'Free Trials'}
            color={'#fff'}
            fontSize={30}
            fontWeight={600}
            marginBottom={2}
          />
          <CustomText
            text={`Get started with a free trial of one of our solutions.`}
            color={'#fff'}
            whiteSpace={'pre-line'}
            fontSize={16}
            marginBottom={2}
          />
          <UIButton btnType="contained" title={`Free Trials`} />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomText
            text={'About OpenSource'}
            color={'#fff'}
            fontSize={30}
            fontWeight={600}
            marginBottom={2}
          />
          <CustomText
            text={`Learn more about Perforce solutions for DevOps at scale.`}
            color={'#fff'}
            whiteSpace={'pre-line'}
            fontSize={16}
            marginBottom={2}
          />
          <UIButton btnType="contained" title={`Explore Solution`} />
        </Grid>
      </Grid>
      <Grid container marginY={10} gap={2}>
        {data.map((val) => (
          <Grid
            item
            xs={6}
            md={2.8}
            key={val.id}
            display={'flex'}
            justifyContent={'center'}
            sx={{
              backgroundImage: `url('${val.bgImage.src}')`,
              width: '100%',
              height: 400,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: "flex", 
              alignItems: "flex-end"
            }}
          >
            <CustomText
              text={val.title}
              color={'#fff'}
              fontSize={30}
              fontWeight={600}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PowerCard
