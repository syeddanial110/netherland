'use client'

import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'

export const UIFlowBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '6px 40px',
  width: 'fit-content',
  opacity: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  borderRadius: '12px',
  '> p': {
    color: 'black',
  },
}))
