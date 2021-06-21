import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#fff',
      main: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#EA0008',
      tertiary: '#fff',
      navText: 'whitesmoke',
    }
  },
  shadows,
  typography
});

export default theme;
