import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from 'react-bootstrap'
import './styles.css'
import { Images, SVGs } from '@/constants/Images'
import Image from 'next/image'
import CustomText from '../CustomText'
import { PartnerBgBox } from './ui'
import databaseImg from '../../assets/images/DatabaseImage.png'
import streamingImg from '../../assets/images/streamingImage.png'
import unifiedImg from '../../assets/images/UnifiedImage.png'
import kubernetesImg from '../../assets/images/KubernetesImage.png'
import devOpsImg from '../../assets/images/DevOpsImage.png'
import UITypography from '../UITypography/UITypography'

const data = [
  {
    id: 1,
    bgImage: databaseImg,
    icon: SVGs.databasePlatoform,
    title: `Database${`\n`}Platform`,
  },
  {
    id: 2,
    bgImage: streamingImg,
    icon: SVGs.StreamingSvg,
    title: `Streaming${`\n`}Data Pipeline`,
  },
  {
    id: 3,
    bgImage: unifiedImg,
    icon: SVGs.UnifiedSvg,
    title: `Unified${`\n`}Observability`,
  },
  {
    id: 4,
    bgImage: kubernetesImg,
    icon: SVGs.KubernetesSvg,
    title: `Kubernetes${`\n`}and Cloud`,
  },
  {
    id: 5,
    bgImage: devOpsImg,
    icon: SVGs.DevOpsSvg,
    title: `DevOps and${`\n`}Automation`,
  },
]

const PartnerCard = () => {
  return (
    <Container>
      <Box
        sx={{ display: 'flex', justifyContent: 'center' }}
        xs={6}
        md={12}
        marginTop={10}
        marginBottom={5}
      >
        <p>
          YOUR<span> OPEN SOURCE </span>TECHNOLOGY
          <br />
          PARTNER FOR THE<span> DIGITAL-FIRST </span>ERA
        </p>
      </Box>
      <Grid
        container
        marginY={3}
        columnGap={2}
        display={'flex'}
        justifyContent={'center'}
      >
        {data.map((val) => (
          <Grid
            item
            key={val.id}
            xs={3}
            md={2.2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={'center'}
          >
            <PartnerBgBox img={val.bgImage}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 270,
                  left: '20%',
                  right: '50%',
                  transform: 'translateX(50%)',
                  width: 90,
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: 1,
                    backgroundColor: '#26CB99',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                  }}
                >
                  <Image src={val.icon.src} width={50} height={50} />
                </Box>
                <Box sx={{ width: '100%', mt: 1 }}>
                  <UITypography title={val.title} textAlign="center" />
                </Box>
              </Box>
            </PartnerBgBox>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#26CB99',
            borderRadius: 1,
            padding: 1,
            width: '300px',
          }}
        >
          <CustomText
            text={'Make Everything Possible'}
            fontSize={16}
            textAlign={'center'}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default PartnerCard
