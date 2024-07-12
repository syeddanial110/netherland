'use client'

import { Box, ListItemText } from '@mui/material'
import { styled } from '@mui/system'
import withoutOpenSourceImg from '../../assets/images/withoutOpenSource.png'
import withOpenSourceImg from '../../assets/images/withOpenSource.png'
import CircleIcon from '@mui/icons-material/Circle'

export const UIBackgroundBox = styled(Box)(({ theme, isWithoutSource }) => ({
  position: 'relative',
  backgroundImage: isWithoutSource
    ? `url('${withoutOpenSourceImg.src}')`
    : `url('${withOpenSourceImg.src}')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '600px',
  width: '100%',
}))

export const UITextBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.greyShade2,
  padding: '20px 40px',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
}))

export const StyledCircleIcon = styled(CircleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textTransform: 'uppercase',
  '& > span': {
    color: `${theme.palette.primary.white} !important`,
    fontSize: '25px !important',
  },
}))
