import { responsiveFontSizes, alpha, createTheme, ThemeOptions } from '@mui/material';

const defaultContrastText = '#070A1B';
const grey = {
  '50': '#E5E9FF',
  '100': '#CFD3E8',
  '200': '#B9BCD1',
  '300': '#8C90A4',
  '400': '#76798D',
  '500': '#606376',
  '600': '#4A4D5F',
  '700': '#333749',
  '800': '#1D2032',
  '900': '#070A1B',
  A100: '#D5D5D5',
  A200: '#AAAAAA',
  A400: '#616161',
  A700: '#303030',
};

const theme: ThemeOptions = {
  typography: {
    fontFamily: ['sans-serif', 'Inter'].join(', '),
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D2EF',
      dark: '#00A0BC',
      light: '#38EDF8',
      contrastText: alpha('#000', 0.87),
      gradient: 'linear-gradient(135deg, #654DFF 0%, #00D2EF 45.31%, #18EBB4 100%)',
    },
    background: {
      default: defaultContrastText,
      paper: '#13172A',
    },
    grey,
  },
};

export default responsiveFontSizes(
  createTheme(theme)
);