import React from 'react'
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Images } from '@/constants/Images'
import CustomText from '../CustomText'
import {
  StyledCircleIcon,
  StyledListItemText,
  UIBackgroundBox,
  UITextBox,
} from './ui'
import UITypography from '../UITypography/UITypography'
import CircleIcon from '@mui/icons-material/Circle'

const WithWithoutCard = () => {
  const list1 = [
    'Higher licensing cost',
    'Limited products',
    'Limited features',
    'No flexibility',
  ]

  const list2 = [
    'cost saving',
    'company growth',
    'no vendor lock-in',
    'customization',
  ]

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12} md={6}
          sx={{
            borderRightWidth: '6px',
            borderStyle: 'solid',
            borderColor: 'white',
          }}
        >
          <UIBackgroundBox
            sx={{
              borderTopLeftRadius: '15px',
            }}
            isWithoutSource={true}
          >
            <Box sx={{ position: 'absolute', bottom: 10, left: 60 }}>
              <UITypography type="heading" title="Without" isGreen={true} />
              <UITypography type="heading" title="OpenSource" />
            </Box>
          </UIBackgroundBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <UIBackgroundBox
            sx={{
              borderTopRightRadius: '15px',
            }}
            isWithoutSource={false}
          >
            <Box sx={{ position: 'absolute', bottom: 10, left: 60 }}>
              <UITypography type="heading" title="With" isGreen={true} />
              <UITypography type="heading" title="OpenSource" />
            </Box>
          </UIBackgroundBox>
        </Grid>
        <Grid item xs={12}>
          <UITextBox>
            <Grid container>
              <Grid item xs={12} md={6}>
                <List>
                  {list1.map((item) => {
                    return (
                      <ListItem>
                        <ListItemIcon>
                          <StyledCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <StyledListItemText primary={item} />
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
              <Grid item xs={12} md={5}>
                <List>
                  {list2.map((item) => {
                    return (
                      <ListItem>
                        <ListItemIcon>
                          <StyledCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <StyledListItemText primary={item} />
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
            </Grid>
          </UITextBox>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WithWithoutCard
