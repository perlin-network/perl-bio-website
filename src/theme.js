import { createTheme, lighten, darken } from '@mui/material/styles';

const baseFontFamily = "'Poppins', sans-serif";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#55AB1D',
      light: '#91D873',
    },
    text: {
      primary: '#202020',
    },
    background: {
      neutral: '#F3F3F3',
    },
  },
  typography: {
    fontFamily: baseFontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#202020',
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
});

export default theme;
