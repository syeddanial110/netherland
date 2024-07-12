'use client'

import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const UIMainHeadingTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.whiteShade,
  fontSize: '48px',
  fontFamily: 'custFontTitle',
  [theme.breakpoints.down('xl')]: {
    fontSize: '50px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  fontWeight: 600,
}))

export const UIHeadingTypography = styled(Typography)(({ theme, isGreen }) => ({
  color: isGreen
    ? theme.palette.primary.main
    : theme.palette.primary.whiteShade,
  fontWeight: 700,
  fontSize: '50px',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}))
export const UISubHeadingTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: theme.palette.primary.whiteShade,

    fontSize: '24px',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  }),
)

export const UIMainDescriptionTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: theme.palette.primary.whiteShade,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  }),
)
export const UIDescriptionTypography = styled(Typography)(
  ({ theme, isWhite }) => ({
    color: theme.palette.primary.whiteShade,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '14px',
    },
  }),
)
