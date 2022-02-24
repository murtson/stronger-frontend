import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeSmall: {},
        sizeMedium: {
          lineHeight: 2,
          borderRadius: 5,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  },
  palette: {
    secondary: {
      main: '#7A7EFF',
    },
    info: {
      light: '#C2E9FF',
      main: '#3DABE8',
      contrastText: 'white',
    },
    primary: {
      main: '#377FEA',
    },
    warning: {
      main: '#F95555',
    },
    success: {
      main: '#3FD2A0',
      contrastText: 'white',
    },
    error: {
      main: '#F95555',
    },
  },
});
