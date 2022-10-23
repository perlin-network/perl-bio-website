// import { createTheme, lighten, darken } from '@mui/material/styles';

export const navbarHeight = 116;
export const navbarHeightSmall = 60;
export const baseFontFamily = "'Poppins', sans-serif";

export const lightTheme = {
  typography: {
    fontFamily: baseFontFamily,
  },
};

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF',
    },
    text: {
      primary: '#FFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    background: {
      default: '#111112',
      paper: '#111112',
    },
  },
  typography: {
    fontFamily: baseFontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#111112',
        },
        svg: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 700,
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: '#fff',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#69b538',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
              },
            }),
        }),
        sizeLarge: {
          fontSize: 18,
        },
      },
    },
  },
};