import { Images } from '@/constants/Images'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import CustomText from '../CustomText'
import UITypography from '../UITypography/UITypography'
import { TechnologyBgBox } from './ui'
import dataMonitoringImg from '../../assets/images/DataMonitoring.png'
import softwareDevelopmentImg from '../../assets/images/softwareDevelopment.png'
import machineLearningImg from '../../assets/images/machineLearning.png'
import itManagementImg from '../../assets/images/ItManagement.png'
import devOpsImg from '../../assets/images/DevOps.png'
import digitalTranformationImg from '../../assets/images/digital.png'
import subcriptionImg from '../../assets/images/subcription.png'

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
]

const TechnologyCard = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
        xs={6}
        md={12}
        marginTop={10}
        marginBottom={5}
      >
        <CustomText
          text={'TECHNOLOGIES WE'}
          marginRight={1}
          color={'#fff'}
          fontSize={30}
          fontWeight={600}
        />
        <CustomText
          text={'DEAL IN'}
          color={'#26CB99'}
          fontSize={30}
          fontWeight={600}
        />
      </Box>

      <Grid container gap={2}>
        <Grid item xs={12} md={7}>
          <TechnologyBgBox bgImg={dataMonitoringImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography
                type="subheading"
                title="Observability & Data Monitoring"
              />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <TechnologyBgBox bgImg={softwareDevelopmentImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography type="subheading" title="Software Development" />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <TechnologyBgBox bgImg={machineLearningImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography
                type="subheading"
                title="Data, machine learning & Ai"
              />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <TechnologyBgBox bgImg={itManagementImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography type="subheading" title="IT Management" />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <TechnologyBgBox bgImg={devOpsImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography type="subheading" title="DevOps" />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <TechnologyBgBox bgImg={digitalTranformationImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography type="subheading" title="Digital Transformation" />
            </Box>
          </TechnologyBgBox>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <TechnologyBgBox bgImg={subcriptionImg}>
            <Box sx={{ position: 'absolute', bottom: 10, left: 20 }}>
              <UITypography type="subheading" title="Software Subscription" />
            </Box>
          </TechnologyBgBox>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TechnologyCard
