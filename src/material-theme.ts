import { createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

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
          lineHeight: 2.1,
          borderRadius: 5,
        },
        sizeLarge: {
          paddingTop: '12px',
          paddingBottom: '12px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    subtitle1: {
      fontWeight: 500,
      // [breakpoints.up('md')]: {
      //   fontSize: 16,
      //   fontWeight: 500,
      // },
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  shadows: [
    'none',
    'none',
    '0 1px 2px rgba(0, 0, 0, 0.2)',
    '0 2px 4px rgba(0, 0, 0, 0.2)',
    '0 2px 8px rgba(0, 0, 0, 0.2)',
    '0 2px 16px rgba(0, 0, 0, 0.2)',
    ...Array(20).fill('none'),
  ] as Shadows,
  palette: {
    secondary: {
      main: '#7A7EFF',
    },
    info: {
      light: '#C2E9FF',
      main: '#3DABE8',
      contrastText: '#FFFFFF',
    },
    primary: {
      light: '#d7ebff',
      main: '#1b82eb',
      dark: '#095db3',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F95555',
    },
    success: {
      main: '#32cf92',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F95555',
    },
    neutral: {
      light: '#f5f5f5',
      main: '#e0e0e0',
      dark: '#9e9e9e',
      contrastText: '#000000',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
