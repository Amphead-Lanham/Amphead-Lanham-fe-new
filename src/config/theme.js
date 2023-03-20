import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(2, 147, 150)'
    },
    secondary: {
      main: 'rgb(238, 241, 239)'
    },
    info: {
      main: '#36947F'
    },
    error: {
      main: '#B23A48'
    },
    matteBlack: {
      main: '#23232b'
    },
    zomp: {
      main: '#36947F'
    }
  },
  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

export default theme;
