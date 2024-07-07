import React from 'react'
import { Box, Grid } from '@mui/material'
import CustomText from '../CustomText'
import './styles.css'
import { SVGs } from '@/constants/Images'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import UITypography from '../UITypography/UITypography'

const data = [
  {
    id: 1,
    image: SVGs.tick,
    title: 'Guaranteed SLAs',
  },
  {
    id: 2,
    image: SVGs.people,
    title: `24/7/365 Support Delivered by${`\n`}Enterprise Architects`,
  },
  {
    id: 3,
    image: SVGs.magnifier,
    title: `Enterprise Support for 400+${`\n`}open Source Enterprise`,
  },
  {
    id: 4,
    image: SVGs.migrationIcon,
    title: `Open Source Migration Services${`\n`}and Consultative Guidance`,
  },
]

const SupportCard = () => {
  return (
    <Container>
      <Grid container marginY={5} gap={4} justifyContent='space-around'>
        <Grid item xs={12} md={6.5}>
          <p className="text">
            <span className="supportHead">Technical Support </span>&
            Professional Services for Your Open Source Infrastructure
          </p>
          <UITypography
            type="mainDescription"
            title=" Supporting open source software in-house can be an ongoing obstacle to innovation — and ultimately impact your business goals. OpenLogic by Perforce provides the expert technical support needed to succeed with
                        open source, giving your teams the freedom to focus on driving your business forward."
          />

          <UITypography
            type="mainDescription"
            title="With SLA-backed technical support for over 400 open source packages,
            and direct access to experienced enterprise architects, OpenSource
            consulting customers receive comprehensive technical support and
            professional services built for the enterprise — all in one place."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          justifyContent={'space-around'}
          display={'flex'}
          flexDirection={'column'}
        >
          {data.map((val) => (
            <Grid container key={val.id}>
              <Image
                src={val.image}
                width={50}
                height={50}
                style={{ marginRight: 10 }}
              />
              <CustomText text={val.title} whiteSpace={'pre-line'} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default SupportCard
