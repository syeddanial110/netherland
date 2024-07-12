'use client'

import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TechnologyBgBox = styled(Box)(({ theme, bgImg }) => ({
  position: 'relative',
  backgroundImage: `url('${bgImg.src}')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '250px',
  width: '100%',
  borderRadius: '30px',
}))
