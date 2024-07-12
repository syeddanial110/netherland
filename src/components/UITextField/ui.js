import { styled } from '@mui/system'
import { Box, Switch, TextField } from '@mui/material'

export const UIStyledOutlinedField = styled(TextField)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',

  '& .MuiInputBase-root': {
    '> input': {
      color: theme.palette.primary.white,
      padding: '12px 0px 12px 0px',
    },
  },
  '& .MuiInputBase-root:before': {
    borderColor: '#F9F9F9',
  },
  '& .MuiInputBase-root:hover:before': {
    borderColor: '#F9F9F9 !important',
  },

  //   "&": {
  //     borderRadius: "16px !important",
  //   },
  //   "& > div": {
  //     borderRadius: "16px !important",
  //   },
  //   "& * > fieldset": {
  //     borderRadius: "16px !important",
  //   },
}))

export const UIStyledContainedField = styled(TextField)(({ theme }) => ({
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  backgroundColor: 'white',
  borderRadius: '0.5rem !important',
  '&': {
    borderRadius: '16px !important',
  },
  '& > div': {
    borderRadius: '16px !important',
  },
  '& * > fieldset': {
    borderRadius: '16px !important',
  },
  '& .MuiInputBase-root': {
    '> input': {
      color: theme.palette.primary.black,
      padding: '12px 14px 12px 14px',
    },
  },
}))

export const UIStyledOutlinedMultiline = styled(TextField)(({ theme }) => ({
  background: 'transparent !important',
  boxShadow: 'none !important',

  '& .MuiInputBase-root': {
    '> textarea': {
      color: theme.palette.primary.white,
    },
  },

  '& .MuiInputBase-root:before': {
    borderColor: '#F9F9F9',
  },
  '& .MuiInputBase-root:hover:before': {
    borderColor: '#F9F9F9 !important',
  },
}))

// Country Input
// export const CountryListWrapper = styled(Box)(({ theme, error }) => ({
//   height: "100%",
//   width: "100%",
//   backgroundColor: "white",
//   borderRadius: "0.5rem !important",

//   "& .form-control": {
//     padding: "10px 14px 10px 58px",
//     width: "100%",
//     borderRadius: "8px",
//     borderColor: error && "red",

//     "&:hover": {
//       borderColor: error && "red",
//     },
//     "&:focus": {
//       borderColor: error && "red",
//       boxShadow: "none",
//     },
//   },
//   "& .special-label": {
//     display: "none",
//     left: "10px",
//     color: error && "red",
//     // fontFamily: "'Open Sans', 'sans-serif'",
//     fontSize: "0.7rem",
//   },
// }));

// // Date Picker
// export const StyledDatePicker = styled(DatePicker)(({ theme, error }) => ({
//   //   color: theme.palette.primary.main,
//   width: "100%",
//   "& .MuiFormLabel-root": {
//     fontSize: "1rem",
//     color: error && "red",
//   },
//   "& .MuiInputBase-root": {
//     fontSize: "1rem",
//     fontWeight: 500,
//     borderRadius: "0.5rem !important",
//     height: "2.9em",
//     "& > input": {
//       padding: "13px",
//     },
//   },
//   ".css-1k1wi5o-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
//     {
//       borderColor: theme.palette.grey[400],
//     },
//   ".css-iuli2o-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
//     color: theme.palette.grey[800],
//   },
// }));
