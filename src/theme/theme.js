'use client'
import { createTheme } from '@mui/material/styles'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#26CB99',
      yellowShade: '#BB9C00',
      yellowShade2: '#ad9726',
      blueShade1: '#292A46',
      blueShade2: '#17182A',
      blueShade3: '#1F0E4A',
      blueShade4: '#4770F6',

      greyShade1: '#F6F6F6',
      greyShade2: '#282828',

      blackShade1: '#282828',
      whiteShade: '#F9F9F9',
      whiteShade1: '#CFCFCF',
      greenShade1: '#63A5B1',
      brownShade1: '#BFB2A1',
      borwnShade2: '#6D6D6D',
      black: '#000000',
      headerShade: '#222222e0',

      white: '#ffffff',
    },
    secondary: {
      main: '#20B14C',
      error: '#F2424E',
    },
    error: {
      main: '#f4f4f4',
    },
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
      xxl: 1900,
      xxxl: 2400,
    },
  },
})

export default theme
