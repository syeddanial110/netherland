import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from 'react-bootstrap'
import './styles.css'
import CustomText from '../CustomText'
import Image from 'next/image'
import { SVGs } from '@/constants/Images'

const data = [
  {
    id: 1,
    title: 'Consulting Services',
    desc: `Enterprise open source consulting services for your organisation’s goals.`,
  },
  {
    id: 2,
    title: 'Technical Services',
    desc: `Installing, configuring, and fine-tuning of your production environment is now easier.`,
  },
  {
    id: 3,
    title: 'Migration Services',
    desc: `Migrate from the legacy database platform to the platform of your choice.`,
  },
  {
    id: 4,
    title: 'Managed Services',
    desc: `From performing essential health checks to service delivery, we manage it all.`,
  },
  {
    id: 5,
    title: 'Training Services',
    desc: `Get certified in Postgres and MongoDB. Up your database game and boost your career.`,
  },
]

const ConfidenceCard = () => {
  return (
    <Container>
      <Grid container marginY={5} rowGap={2}>
        <Grid item xs={12} md={4} padding={{ xs: 1, md: 5 }}>
          <p className="head">
            Transform With
            <span className="conf"> Confidence. </span>
            With Our Diligence Services
          </p>
        </Grid>
        {data.map((val) => (
          <Grid item key={val.id} xs={12} md={4} padding={{ xs: 1, md: 5 }}>
            <CustomText text={val.title} fontSize={25} />
            <CustomText text={val.desc} whiteSpace={'pre-line'} fontSize={16} />
            <Box marginTop={4} sx={{ display: 'flex', flexDirection: 'row' }}>
              <CustomText
                text={'Explore'}
                color={'#26CB99'}
                fontSize={16}
                marginRight={1}
              />
              <Image src={SVGs.rightArrow} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ConfidenceCard
