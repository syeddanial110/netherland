'use client'

import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const PartnerBgBox = styled(Box)(({ theme, img }) => ({
  position: 'relative',
  backgroundImage: `url('${img.src}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '300px',
  width: '100%',
}))
