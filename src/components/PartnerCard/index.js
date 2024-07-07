import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from 'react-bootstrap'
import './styles.css'
import { Images, SVGs } from '@/constants/Images'
import Image from 'next/image'
import CustomText from '../CustomText'

const data = [
  {
    id: 1,
    bgImage: Images.DatabaseImage,
    icon: SVGs.databasePlatoform,
    title: `Database${`\n`}Platform`,
  },
  {
    id: 2,
    bgImage: Images.streamingImage,
    icon: SVGs.StreamingSvg,
    title: `Streaming${`\n`}Data Pipeline`,
  },
  {
    id: 3,
    bgImage: Images.UnifiedImage,
    icon: SVGs.UnifiedSvg,
    title: `Unified${`\n`}Observability`,
  },
  {
    id: 4,
    bgImage: Images.KubernetesImage,
    icon: SVGs.KubernetesSvg,
    title: `Kubernetes${`\n`}and Cloud`,
  },
  {
    id: 5,
    bgImage: Images.DevOpsImage,
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
            md={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            justifyContent={'center'}
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
              }}
            >
              <Image src={val.icon.src} width={50} height={50} />
            </Box>
            <CustomText
              text={val.title}
              whiteSpace={'pre-line'}
              textAlign={'center'}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 10,
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
